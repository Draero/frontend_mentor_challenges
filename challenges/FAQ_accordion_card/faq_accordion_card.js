class faqAccordionCardView {

  viewObject = {
    name: "faqAccordionCardView",
    links: [
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap"},
      {rel: "stylesheet", href: "./challenges/FAQ_accordion_card/faq_accordion_card.css"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return fetch("./challenges/FAQ_accordion_card/faq_accordion_card.html");
  }
}

export default new faqAccordionCardView();