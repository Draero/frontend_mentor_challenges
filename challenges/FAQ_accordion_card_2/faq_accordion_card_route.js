import generalViewController from "./faq_accordion_card_controller.js";

class faqAccordionCard2View {

  viewObject = {
    name: "faqAccordionCard2View",
    navStyles: {
      inputB: "var(--star-purple)",
      linkC: "var(--white)",
      navB: "var(--grayish-purple)",
      linkB: "var(--dark-purple)",
      navFont: "'Work Sans', sans-serif"
    },
    links: [
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"},
      {rel: "stylesheet", href: "./challenges/FAQ_accordion_card_2/faq_accordion_card.css"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return new generalViewController();
  }
}

export default new faqAccordionCard2View();