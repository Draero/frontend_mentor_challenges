class threeColumnPreviewCardView {

  viewObject = {
    name: "threeColumnPreviewCardView",
    title: "Challenge 10",
    links: [
      {rel: "icon", href: "./challenges/3-column_preview_card/images/favicon-32x32.png", type: "image/x-icon"},
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&family=Lexend+Deca&display=swap"},
      {rel: "stylesheet", href: "./challenges/3-column_preview_card/3-column_preview_card.css"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return fetch("./challenges/3-column_preview_card/3-column_preview_card.html")
      .then(response => response.text());
  }
}

export default new threeColumnPreviewCardView();