class profileCardView {

  viewObject = {
    name: "profileCardView",
    links: [
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"},
      {rel: "stylesheet", href: "./challenges/Profile_card/profile_card.css"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return fetch("./challenges/Profile_card/profile_card.html");
  }
}

export default new profileCardView();