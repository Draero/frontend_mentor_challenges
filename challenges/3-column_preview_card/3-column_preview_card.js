class threeColumnPreviewCardView {

  viewObject = {
    name: "threeColumnPreviewCardView",
    navStyles: {
      inputB: "var(--very-dark-cyan)",
      linkC: "var(--very-light-gray)",
      linkB: "var(--bright-orange)",
      navB: "var(--dark-cyan-1)",
      navFont: "'Lexend Deca', sans-serif"
    },
    links: [
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap"},
      {rel: "stylesheet", href: "./challenges/3-column_preview_card/3-column_preview_card.css"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return fetch("./challenges/3-column_preview_card/3-column_preview_card.html");
  }
}

export default new threeColumnPreviewCardView();