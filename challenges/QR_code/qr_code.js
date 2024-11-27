class qrCodeView {

  viewObject = {
    name: "qrCodeView",
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