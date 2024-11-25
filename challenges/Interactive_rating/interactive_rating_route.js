import generalViewController from "./interactive_rating_controller.js"; 

class interactiveRatingView {

  viewObject = {
    name: "interactiveRatingView",
    links: [
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap"},
      {rel: "stylesheet", href: "./challenges/Interactive_rating/interactive_rating.css"},
    ]
  };

  constructor () {}

  getViewTemplate () {
    return new generalViewController();
  }
}

export default new interactiveRatingView();