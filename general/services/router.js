import mainService from "./mainservice.js";

import home from "../home/home.js";
import threeColumnPreviewCardView from "../../challenges/3-column_preview_card/3-column_preview_card.js";
import blogPreviewCardView from "../../challenges/Blog_preview_card/blog_preview_card.js";
import faqAccordionCard1View from "../../challenges/FAQ_accordion_card_1/faq_accordion_card.js";
import huddleLandingPage1View from "../../challenges/Huddle_landing_page_1/huddle_landing_page_1.js";
import interactiveRatingView from "../../challenges/Interactive_rating/interactive_rating_route.js";
import nftPreviewCardView from "../../challenges/NFT_preview_card/nft_preview_card_route.js";
import orderSummaryView from "../../challenges/Order_summary/order_summary.js";
import productPreviewCardView from "../../challenges/Product_preview_card/product_preview_card_route.js";
import profileCardView from "../../challenges/Profile_card/profile_card.js";
import qrCodeView from "../../challenges/QR_code/qr_code.js";
import recipePageView from "../../challenges/Recipe_page/recipe_page.js";
import resultsSummaryView from "../../challenges/Results_summary/results_summary_route.js";
import socialLinksProfileView from "../../challenges/Social_links_profile/social_links_profile.js";
import statsPreviewCardView from "../../challenges/Stats_preview_card/stats_preview_card_route.js"
import faqAccordionCard2View from "../../challenges/FAQ_accordion_card_2/faq_accordion_card_route.js";

class Router {

  viewList = [
    home,
    threeColumnPreviewCardView,
    blogPreviewCardView,
    faqAccordionCard1View,
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
    statsPreviewCardView,
    faqAccordionCard2View
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
  oldAElement = null;

  // Fist load flag
  firstLoad = true;

  constructor (appelement) {
    this.appelement = appelement;
  }

  generateMain (newname, ishtmlstring, route) {
    this.oldAElement = mainService.selectARoute(route, this.oldAElement);
    if (Object.keys(this.oldViewObject).length !== 0) {
      if (this.oldViewObject.name !== newname) {
        mainService.removeLinks(this.oldViewObject.links);
        mainService.addLinks(this.viewObject[newname].viewObject.links);
        this.oldViewObject = this.viewObject[newname].viewObject;
        mainService.setNavStyles(this.oldViewObject.navStyles, this.navObject, this.firstLoad);
        if (ishtmlstring) return this.viewObject[newname].getViewTemplate().then(response => response.text());
      } else {
        if (ishtmlstring)  return this.viewObject[newname].getViewTemplate().then(response => response.text());
      }
    } else {
      this.oldViewObject = this.viewObject[newname].viewObject;
      mainService.setNavStyles(this.oldViewObject.navStyles, this.navObject, this.firstLoad);
      mainService.addLinks(this.oldViewObject.links);
      if (ishtmlstring) return this.viewObject[newname].getViewTemplate().then(response => response.text());
    }
    this.firstLoad = false;
  }

  async refreshView (newhash, navObject) {
    const route = newhash || "#home";
    this.auxViewObject = null;
    if (Object.keys(this.navObject).length === 0) this.navObject = navObject;
    document.querySelector(".nav-input").checked = false;

    switch (route) {
      case "#home":
        this.appelement.innerHTML = await this.generateMain("home", true, route);
        break;
  
      case "#huddle_landing_page_1":
        this.appelement.innerHTML = await this.generateMain("huddleLandingPage1View", true, route);
        break;
  
      case "#profile_card":
        this.appelement.innerHTML = await this.generateMain("profileCardView", true, route);
        break;
  
      case "#results_summary":
        this.auxViewObject = resultsSummaryView.getViewTemplate();
        this.generateMain("resultsSummaryView", false, route);
        this.auxViewObject.loadListeners();
        break;
  
      case "#product_preview_card":
        this.auxViewObject = productPreviewCardView.getViewTemplate();
        this.generateMain("productPreviewCardView", false, route);
        this.auxViewObject.loadListeners();
        break;
  
      case "#interactive_rating":
        this.auxViewObject = interactiveRatingView.getViewTemplate();
        this.generateMain("interactiveRatingView", false, route);
        this.auxViewObject.loadListeners();
        break;
  
      case "#qr_code":
        this.appelement.innerHTML = await this.generateMain("qrCodeView", true, route);
        break;
  
      case "#nft_preview_card":
        this.auxViewObject = nftPreviewCardView.getViewTemplate();
        this.generateMain("nftPreviewCardView", false, route);
        this.auxViewObject.loadListeners();
        break;
  
      case "#order_summary":
        this.appelement.innerHTML = await this.generateMain("orderSummaryView", true, route);
        const el = "el";
        break;
  
      case "#stats_preview_card":
        this.auxViewObject = statsPreviewCardView.getViewTemplate();
        this.generateMain("statsPreviewCardView", false, route);
        this.auxViewObject.loadListeners();
        break;
  
      case "#3-column_preview_card":
        this.appelement.innerHTML = await this.generateMain("threeColumnPreviewCardView", true, route);
        break;
  
      case "#faq_accordion_card_1":
        this.appelement.innerHTML = await this.generateMain("faqAccordionCard1View", true, route);
        break;
  
      case "#recipe_page":
        this.appelement.innerHTML = await this.generateMain("recipePageView", true, route);
        break;
  
      case "#social_links_profile":
        this.appelement.innerHTML = await this.generateMain("socialLinksProfileView", true, route);
        break;
  
      case "#blog_preview_card":
        this.appelement.innerHTML = await this.generateMain("blogPreviewCardView", true, route);
        break;

      case "#faq_accordion_card_2":
        this.auxViewObject = faqAccordionCard2View.getViewTemplate();
        this.generateMain("faqAccordionCard2View", false, route);
        this.auxViewObject.loadListeners();
        break;
  
      default:
        this.appelement.innerHTML = "<h1>404 - Page Not Found</h1>";
    }

  }
}

export default Router;