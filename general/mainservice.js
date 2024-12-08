class mainService {

  constructor () {}

  removeLinks (linkslist) {
    linkslist.forEach(el => {
      const link = document.querySelector(`link[href='${el.href}']`);
      if (link) {
        link.remove();
        console.log("The link has been removed");
      } else {
        console.log(`There is not ${el.href} href reference to remove`);
      }
    });
  }

  addLinks (linkslist) {
    linkslist.forEach(el => {
      const newlink = document.createElement('link');
      newlink.rel = el.rel;
      newlink.href = el.href;
      if ("crossorigin" in el) newlink.crossorigin = el.crossorigin;
      if ("type" in el) newlink.type = el.type;
      if ("media" in el) newlink.media = el.media;
      document.head.appendChild(newlink);
      console.log("Link added");
    });
  }

  setNavStyles (navStyles, navObject) {
    setTimeout(() => {
      const root = document.documentElement.style;
      navObject.navigation.style.backgroundColor = navStyles.navB;
      navObject.navigation.style.fontFamily = navStyles.navFont;
      navObject.navArrow.style.fill = navStyles.linkC;
      navObject.navPool.style.backgroundColor = navStyles.inputB;
      root.setProperty('--app_nav_hover_color', navStyles.inputB);
      root.setProperty('--selected_nav_bg', navStyles.linkB);
      navObject.mainNavA.forEach(a => {
        a.style.color = navStyles.linkC;
      });
    }, 500);
  }

  addClickAListener (alist, oldAElement) {
    alist.forEach(a => {
      a.addEventListener("click", (node) => {
        if (Object.keys(oldAElement).length !== 0) {
          oldAElement.classList.toggle("selected-nav-bg");
          node.currentTarget.classList.toggle("selected-nav-bg");
          oldAElement = node.currentTarget;
        }
        oldAElement = node.currentTarget;
        oldAElement.classList.toggle("selected-nav-bg");
      });
    });
  }

}

export default new mainService();