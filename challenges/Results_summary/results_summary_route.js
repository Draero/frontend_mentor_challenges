import generalViewController from "./results_summary_controller.js";

class resultsSummaryView {

  viewObject = {
    name: "resultsSummaryView",
    links: [
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700;800&display=swap"},
      {rel: "stylesheet", href: "./challenges/Results_summary/results_summary_style.css"},
      {rel: "stylesheet", href: "./challenges/Results_summary/results_summary_desktop.css", media: "(min-width: 768px)"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return new generalViewController();
  }
}

export default new resultsSummaryView();