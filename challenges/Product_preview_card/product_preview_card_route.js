import generalViewController from "./product_preview_card_controller.js";

class productPreviewCardView {

  viewObject = {
    name: "productPreviewCardView",
    navStyles: {
      inputB: "var(--dark-cyan-2)",
      linkC: "var(--cream)",
      navB: "var(--dark-grayish-blue-2)",
      linkB: "var(--very-dark-blue-2)",
      navFont: "'Montserrat', sans-serif"
    },
    links: [
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:wght@700&family=Montserrat:wght@500;700&display=swap"},
      {rel: "stylesheet", href: "./challenges/Product_preview_card/product_preview_card_style.css"},
      {rel: "stylesheet", href: "./challenges/Product_preview_card/product_preview_card_desktop.css", media: "(min-width: 750px)"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return new generalViewController();
  }
}

export default new productPreviewCardView();