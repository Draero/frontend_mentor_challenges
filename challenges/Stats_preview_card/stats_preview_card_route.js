import generalViewController from "./stats_preview_card_controller.js";

class statsPreviewCardView {

  viewObject = {
    name: "statsPreviewCardView",
    links: [
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lexend+Deca&display=swap"},
      {rel: "stylesheet", href: "./challenges/Stats_preview_card/stats_preview_card_style.css"},
      {rel: "stylesheet", href: "./challenges/Stats_preview_card/stats_preview_card_desktop.css", media: "(min-width: 1240px)"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return new generalViewController();
  }
}

export default new statsPreviewCardView();