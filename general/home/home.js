class home {

  viewObject = {
    name: "home",
    navStyles: {
      inputB: "var(--grey-700)",
      linkC: "var(--green)",
      navB: "var(--grey-800)",
      linkB: "var(--grey-900)",
      navFont: '"Inter", sans-serif'
    },
    links: [
      {rel: "stylesheet", href: "./general/home/home.css"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return fetch("./general/home/home.html");
  }
}

export default new home();