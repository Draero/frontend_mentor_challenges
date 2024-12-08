class orderSummaryView {

  viewObject = {
    name: "orderSummaryView",
    navStyles: {
      inputB: "var(--bright-blue)",
      linkC: "var(--white)",
      navB: "var(--desaturaded-blue)",
      linkB: "var(--soft-green)",
      navFont: '"Red Hat Display", sans-serif'
    },
    links: [
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap"},
      {rel: "stylesheet", href: "./challenges/Order_summary/order_summary_style.css"},
      {rel: "stylesheet", href: "./challenges/Order_summary/Order_summary_desktop.css", media: "(min-width: 750px)"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return fetch("./challenges/Order_summary/order_summary.html");
  }
}

export default new orderSummaryView();