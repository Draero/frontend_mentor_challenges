class qrCodeView {

  viewObject = {
    name: "qrCodeView",
    navStyles: {
      inputB: "var(--dark-blue-3)",
      linkC: "var(--white)",
      navB: "var(--grayish-blue)",
      linkB: "var(--bright-blue-1)",
      navFont: "'Outfit', sans-serif"
    },
    links: [
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"},
      {rel: "stylesheet", href: "./challenges/QR_code/qr_code.css"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return fetch("./challenges/QR_code/qr_code.html");
  }
}

export default new qrCodeView();