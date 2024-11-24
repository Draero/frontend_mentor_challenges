import threeColumnPreviewCardView from "./challenges/3-column_preview_card/3-column_preview_card.js";
import blogPreviewCardView from "./challenges/Blog_preview_card/blog_preview_card.js";

class Router {

  viewList = [
    threeColumnPreviewCardView,
    blogPreviewCardView
  ]

  viewObject = this.viewList.reduce((acc, el) => ({
    ...acc, 
    [el.viewObject.name]: el}), {});

  oldViewObject = {};

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
      document.head.appendChild(newlink);
      console.log("Link added");
    });

  }

  generateMain (newname) {
    if (Object.keys(this.oldViewObject).length !== 0) {
      if (this.oldViewObject.name !== newname) {
        this.removeLinks(this.oldViewObject.links);
        this.addLinks(this.viewObject[newname].viewObject.links);
        this.oldViewObject = this.viewObject[newname].viewObject;
        return this.viewObject[newname].getViewTemplate().then(response => response.text());
      } else return this.viewObject[newname].getViewTemplate().then(response => response.text());
    } else {
      this.oldViewObject = this.viewObject[newname].viewObject;
      this.addLinks(this.oldViewObject.links);
      return this.viewObject[newname].getViewTemplate().then(response => response.text());
    }
  }

  async refreshingView (newhash) {
    const route = newhash || "#home";

    switch (route) {
      case "#home":
        this.appelement.innerHTML = "<h1>Home Page</h1><p>Welcome to the home page!</p>";
        break;
  
      case "#huddle_landing_page_1":
        this.appelement.innerHTML =
          "<h1>Huddle landing page 1</h1><p>This is huddle landing page 1</p>";
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
        this.appelement.innerHTML =
          "<h1>Interactive rating</h1><p>This is interactive rating</p>";
        break;
  
      case "#qr_code":
        this.appelement.innerHTML =
          "<h1>QR code</h1><p>This is QR code</p>";
        break;
  
      case "#nft_preview_card":
        this.appelement.innerHTML =
          "<h1>NFT preview card</h1><p>This is NFT preview card</p>";
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
        /* this.appelement.innerHTML = await this.generateMain("threeColumnPreviewCardView"); */
        break;
  
      case "#faq_accordion_card":
        this.appelement.innerHTML =
          "<h1>FAQ accordion card</h1><p>This is FAQ accordion card</p>";
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
        this.appelement.innerHTML = await this.generateMain("blogPreviewCardView");
        break;
  
      default:
        this.appelement.innerHTML = "<h1>404 - Page Not Found</h1>";
    }

  }
}

export default Router;