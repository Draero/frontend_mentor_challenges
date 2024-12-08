class blogPreviewCardView {

  viewObject = {
    name: "blogPreviewCardView",
    navStyles: {
      inputB: "var(--gray-950)",
      linkC: "aliceblue",
      navB: "var(--gray-500)",
      linkB: "var(--yellow)",
      navFont: "'Figtree', sans-serif"
    },
    links: [
      {rel: "stylesheet", href: "./challenges/Blog_preview_card/blog_preview_card.css"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return fetch("./challenges/Blog_preview_card/blog_preview_card.html");
  }
}

export default new blogPreviewCardView();