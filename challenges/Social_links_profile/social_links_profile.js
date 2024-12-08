class socialLinksProfileView {

  viewObject = {
    name: "socialLinksProfileView",
    navStyles: {
      inputB: "var(--grey-700)",
      linkC: "var(--green)",
      navB: "var(--grey-800)",
      linkB: "var(--grey-900)",
      navFont: '"Inter", sans-serif'
    },
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