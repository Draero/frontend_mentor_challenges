class huddleLandingPage1View {

  viewObject = {
    name: "huddleLandingPage1View",
    navStyles: {
      inputB: "var(--soft-violet-3)",
      linkC: "white",
      navB: "var(--soft-violet-1)",
      linkB: "var(--violet)",
      navFont: '"Open Sans", sans-serif'
    },
    links: [
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;600&display=swap"},
      {rel: "stylesheet", href: "./challenges/Huddle_landing_page_1/huddle_landing_page_1_style.css"},
      {rel: "stylesheet", href: "./challenges/Huddle_landing_page_1/huddle_landing_page_1_tablet.css", media: "(min-width: 768px)"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return fetch("./challenges/Huddle_landing_page_1/huddle_landing_page_1.html");
  }
}

export default new huddleLandingPage1View();