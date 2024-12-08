import generalViewController from "./nft_preview_card_controller.js";

class nftPreviewCardView {

  viewObject = {
    name: "nftPreviewCardView",
    navStyles: {
      inputB: "var(--soft-blue-2)",
      linkC: "var(--white)",
      navB: "var(--very-dark-blue-card-BG)",
      linkB: "var(--cyan)",
      navFont: "'Outfit', sans-serif"
    },
    links: [
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap"},
      {rel: "stylesheet", href: "./challenges/NFT_preview_card/nft_preview_card.css"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return new generalViewController();
  }
}

export default new nftPreviewCardView();