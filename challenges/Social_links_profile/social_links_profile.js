class socialLinksProfileView {

  viewObject = {
    name: "socialLinksProfileView",
    links: [
      {rel: "stylesheet", href: "./challenges/Social_links_profile/social_links_profile.css"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return fetch("./challenges/Social_links_profile/social_links_profile.html");
  }
}

export default new socialLinksProfileView();