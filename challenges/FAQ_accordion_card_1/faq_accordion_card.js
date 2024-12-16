class faqAccordionCard1View {

  viewObject = {
    name: "faqAccordionCard1View",
    navStyles: {
      inputB: "var(--soft-red)",
      linkC: "var(--light-grayish-blue)",
      navB: "var(--dark-grayish-blue-1)",
      linkB: "var(--soft-red)",
      navFont: "'Kumbh Sans', sans-serif"
    },
    links: [
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap"},
      {rel: "stylesheet", href: "./challenges/FAQ_accordion_card_1/faq_accordion_card.css"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return fetch("./challenges/FAQ_accordion_card_1/faq_accordion_card.html");
  }
}

export default new faqAccordionCard1View();