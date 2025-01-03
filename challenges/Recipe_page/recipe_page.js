class recipePageView {

  viewObject = {
    name: "recipePageView",
    navStyles: {
      inputB: "var(--brown-800)",
      linkC: "var(--white)",
      navB: "var(--stone-600)",
      linkB: "var(--rose-800)",
      navFont: '"Outfit", system-ui'
    },
    links: [
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Young+Serif&display=swap"},
      {rel: "stylesheet", href: "./challenges/Recipe_page/recipe_page.css"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return fetch("./challenges/Recipe_page/recipe_page.html");
  }
}

export default new recipePageView();