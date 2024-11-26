import threeColumnPreviewCardView from "./challenges/3-column_preview_card/3-column_preview_card.js";
import blogPreviewCardView from "./challenges/Blog_preview_card/blog_preview_card.js";
import faqAccordionCardView from "./challenges/FAQ_accordion_card/faq_accordion_card.js";
import huddleLandingPage1View from "./challenges/Huddle_landing_page_1/huddle_landing_page_1.js";
import interactiveRatingView from "./challenges/Interactive_rating/interactive_rating_route.js";
import nftPreviewCardView from "./challenges/NFT_preview_card/nft_preview_card_route.js";

class Router {

  viewList = [
    threeColumnPreviewCardView,
    blogPreviewCardView,
    faqAccordionCardView,
    huddleLandingPage1View,
    interactiveRatingView,
    nftPreviewCardView
  ]

  viewObject = this.viewList.reduce((acc, el) => ({
    ...acc, 
    [el.viewObject.name]: el}), {});
  
  // object to refresh link
  oldViewObject = {};

  // for views without html return
  auxViewObject = null;

  constructor (appelement) {
    this.appelement = appelement;
  }

  removeLinks (linkslist) {
    linkslist.forEach(el => {
      const link = document.querySelector(`link[href='${el.href}']`);
      if (link) {
        link.remove();
        console.log("The link has been removed");
      } else {
        console.log(`There is not ${el.href} href reference to remove`);
      }
    });
  }

  addLinks (linkslist) {
    linkslist.forEach(el => {
      const newlink = document.createElement('link');
      newlink.rel = el.rel;
      newlink.href = el.href;
      if ("crossorigin" in el) newlink.crossorigin = el.crossorigin;
      if ("type" in el) newlink.type = el.type;
      if ("media" in el) newlink.media = el.media;
      document.head.appendChild(newlink);
      console.log("Link added");
    });

  }

  generateMain (newname, ishtmlstring) {
    if (Object.keys(this.oldViewObject).length !== 0) {
      if (this.oldViewObject.name !== newname) {
        this.removeLinks(this.oldViewObject.links);
        this.addLinks(this.viewObject[newname].viewObject.links);
        this.oldViewObject = this.viewObject[newname].viewObject;
        if (ishtmlstring) return this.viewObject[newname].getViewTemplate().then(response => response.text());
      } else {
        if (ishtmlstring)  return this.viewObject[newname].getViewTemplate().then(response => response.text());
      }
    } else {
      this.oldViewObject = this.viewObject[newname].viewObject;
      this.addLinks(this.oldViewObject.links);
      if (ishtmlstring) return this.viewObject[newname].getViewTemplate().then(response => response.text());
    }
  }

  async refreshingView (newhash) {
    const route = newhash || "#home";
    this.auxViewObject = null;

    switch (route) {
      case "#home":
        this.appelement.innerHTML = "<h1>Home Page</h1><p>Welcome to the home page!</p>";
        break;
  
      case "#huddle_landing_page_1":
        this.appelement.innerHTML = await this.generateMain("huddleLandingPage1View", true);
        break;
  
      case "#profile_card":
        this.appelement.innerHTML =
          "<h1>Profile card</h1><p>This is profile card</p>";
        break;
  
      case "#results_summary":
        this.appelement.innerHTML =
          "<h1>Results summary</h1><p>This is results summary</p>";
        break;
  
      case "#product_preview_card":
        this.appelement.innerHTML =
          "<h1>Product preview card</h1><p>This is product preview card</p>";
        break;
  
      case "#interactive_rating":
        this.auxViewObject = interactiveRatingView.getViewTemplate();
        this.generateMain("interactiveRatingView", false);
        this.auxViewObject.loadListeners();
        break;
  
      case "#qr_code":
        this.appelement.innerHTML =
          "<h1>QR code</h1><p>This is QR code</p>";
        break;
  
      case "#nft_preview_card":
        this.auxViewObject = nftPreviewCardView.getViewTemplate();
        this.generateMain("nftPreviewCardView", false);
        this.auxViewObject.loadListeners();
        break;
  
      case "#order_summary":
        this.appelement.innerHTML =
          "<h1>Order summary</h1><p>This is order summary</p>";
        break;
  
      case "#stats_preview_card":
        this.appelement.innerHTML =
          "<h1>Stats preview card</h1><p>This is stats preview card</p>";
        break;
  
      case "#3-column_preview_card":
        this.appelement.innerHTML = await this.generateMain("threeColumnPreviewCardView", true);
        break;
  
      case "#faq_accordion_card":
        this.appelement.innerHTML = await this.generateMain("faqAccordionCardView", true);
        break;
  
      case "#recipe_page":
        this.appelement.innerHTML =
          "<h1>Recipe page</h1><p>This is recipe page</p>";
        break;
  
      case "#social_links_profile":
        this.appelement.innerHTML =
          "<h1>Social links profile</h1><p>This is social links profile</p>";
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