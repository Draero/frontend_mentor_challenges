class blogPreviewCardView {

  viewObject = {
    name: "blogPreviewCardView",
    links: [
      {rel: "stylesheet", href: "/challenges/Blog_preview_card/blog_preview_card.css"}
    ]
  };

  constructor () {}

  getViewTemplate () {
    return fetch("/challenges/Blog_preview_card/blog_preview_card.html");
  }
}

export default new blogPreviewCardView();