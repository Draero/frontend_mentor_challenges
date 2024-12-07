import mainService from "./general/mainservice.js";

import threeColumnPreviewCardView from "./challenges/3-column_preview_card/3-column_preview_card.js";
import blogPreviewCardView from "./challenges/Blog_preview_card/blog_preview_card.js";
import faqAccordionCardView from "./challenges/FAQ_accordion_card/faq_accordion_card.js";
import huddleLandingPage1View from "./challenges/Huddle_landing_page_1/huddle_landing_page_1.js";
import interactiveRatingView from "./challenges/Interactive_rating/interactive_rating_route.js";
import nftPreviewCardView from "./challenges/NFT_preview_card/nft_preview_card_route.js";
import orderSummaryView from "./challenges/Order_summary/order_summary.js";
import productPreviewCardView from "./challenges/Product_preview_card/product_preview_card_route.js";
import profileCardView from "./challenges/Profile_card/profile_card.js";
import qrCodeView from "./challenges/QR_code/qr_code.js";
import recipePageView from "./challenges/Recipe_page/recipe_page.js";
import resultsSummaryView from "./challenges/Results_summary/results_summary_route.js";
import socialLinksProfileView from "./challenges/Social_links_profile/social_links_profile.js";
import statsPreviewCardView from "./challenges/Stats_preview_card/stats_preview_card_route.js"

class Router {

  viewList = [
    threeColumnPreviewCardView,
    blogPreviewCardView,
    faqAccordionCardView,
    huddleLandingPage1View,
    interactiveRatingView,
    nftPreviewCardView,
    orderSummaryView,
    productPreviewCardView,
    profileCardView,
    qrCodeView,
    recipePageView,
    resultsSummaryView,
    socialLinksProfileView,
    statsPreviewCardView
  ]

  viewObject = this.viewList.reduce((acc, el) => ({
    ...acc, 
    [el.viewObject.name]: el}), {});
  
  // object to refresh link
  oldViewObject = {};

  // for views without html return
  auxViewObject = null;

  // Navigation styles
  navObject = {};

  // Previous selected link
  oldAElement = {};

  constructor (appelement) {
    this.appelement = appelement;
  }

  generateMain (newname, ishtmlstring) {
    if (Object.keys(this.oldViewObject).length !== 0) {
      if (this.oldViewObject.name !== newname) {
        mainService.removeLinks(this.oldViewObject.links);
        mainService.addLinks(this.viewObject[newname].viewObject.links);
        this.oldViewObject = this.viewObject[newname].viewObject;
        mainService.setNavStyles(this.oldViewObject.navStyles, this.navObject);
        if (ishtmlstring) return this.viewObject[newname].getViewTemplate().then(response => response.text());
      } else {
        if (ishtmlstring)  return this.viewObject[newname].getViewTemplate().then(response => response.text());
      }
    } else {
      this.oldViewObject = this.viewObject[newname].viewObject;
      mainService.setNavStyles(this.oldViewObject.navStyles, this.navObject);
      mainService.addLinks(this.oldViewObject.links);
      if (ishtmlstring) return this.viewObject[newname].getViewTemplate().then(response => response.text());
    }
  }

  async refreshingView (newhash, navObject) {
    const route = newhash || "#home";
    this.auxViewObject = null;
    if (Object.keys(this.navObject).length === 0) {
      this.navObject = navObject;
      mainService.addClickAListener(this.navObject.mainNavA, this.oldAElement);
    }
    document.querySelector(".nav-input").checked = false;

    switch (route) {
      case "#home":
        this.appelement.innerHTML = "<h1>Home Page</h1><p>Welcome to the home page!</p>";
        break;
  
      case "#huddle_landing_page_1":
        this.appelement.innerHTML = await this.generateMain("huddleLandingPage1View", true);
        break;
  
      case "#profile_card":
        this.appelement.innerHTML = await this.generateMain("profileCardView", true);
        break;
  
      case "#results_summary":
        this.auxViewObject = resultsSummaryView.getViewTemplate();
        this.generateMain("resultsSummaryView", false);
        this.auxViewObject.loadListeners();
        break;
  
      case "#product_preview_card":
        this.auxViewObject = productPreviewCardView.getViewTemplate();
        this.generateMain("productPreviewCardView", false);
        this.auxViewObject.loadListeners();
        break;
  
      case "#interactive_rating":
        this.auxViewObject = interactiveRatingView.getViewTemplate();
        this.generateMain("interactiveRatingView", false);
        this.auxViewObject.loadListeners();
        break;
  
      case "#qr_code":
        this.appelement.innerHTML = await this.generateMain("qrCodeView", true);
        break;
  
      case "#nft_preview_card":
        this.auxViewObject = nftPreviewCardView.getViewTemplate();
        this.generateMain("nftPreviewCardView", false);
        this.auxViewObject.loadListeners();
        break;
  
      case "#order_summary":
        this.appelement.innerHTML = await this.generateMain("orderSummaryView", true);
        const el = "el";
        break;
  
      case "#stats_preview_card":
        this.auxViewObject = statsPreviewCardView.getViewTemplate();
        this.generateMain("statsPreviewCardView", false);
        this.auxViewObject.loadListeners();
        break;
  
      case "#3-column_preview_card":
        this.appelement.innerHTML = await this.generateMain("threeColumnPreviewCardView", true);
        break;
  
      case "#faq_accordion_card":
        this.appelement.innerHTML = await this.generateMain("faqAccordionCardView", true);
        break;
  
      case "#recipe_page":
        this.appelement.innerHTML = await this.generateMain("recipePageView", true);
        break;
  
      case "#social_links_profile":
        this.appelement.innerHTML = await this.generateMain("socialLinksProfileView", true);
        break;
  
      case "#blog_preview_card":
        this.appelement.innerHTML = await this.generateMain("blogPreviewCardView", true);
        break;
  
      default:
        this.appelement.innerHTML = "<h1>404 - Page Not Found</h1>";
    }

  }
}

export default Router;