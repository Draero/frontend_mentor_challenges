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

  setNavStyles (navStyles, navObject, fL) {
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
    }, fL ? 0 : 500);
  }

  selectARoute (route, oldAElement) {
    const selectedA = route !== "#home" ? 
      document.querySelector(`a[href='${route}']`) : 
      document.querySelector(`a[href=""]`);

    if (oldAElement) oldAElement.classList.toggle("selected-nav-bg");
    oldAElement = selectedA;
    if (oldAElement) oldAElement.classList.toggle("selected-nav-bg");
    return oldAElement;
  }

  /* -------- When view charge for the first time firstload = true -------- */
  refreshBg (firstLoad, mobileFlag, mobilePercentage, desktopPercentage) {
    const root = document.documentElement.style;
    if (window.innerWidth <= window.innerHeight && !mobileFlag) {
      root.setProperty('--bgImage', 'url("./images/background-pattern-mobile.svg")');
      root.setProperty('--bgHeight', `${Math.round(window.innerWidth * mobilePercentage)}px`);
      return true;
    }
    else if (window.innerWidth <= window.innerHeight) {
      root.setProperty('--bgHeight', `${Math.round(window.innerWidth * mobilePercentage)}px`);
      return mobileFlag;
    }
    else if ((window.innerWidth > window.innerHeight && mobileFlag) || firstLoad) {
      root.setProperty('--bgImage', 'url("./images/background-pattern-desktop.svg")');
      root.setProperty('--bgHeight', `${Math.round(window.innerWidth * desktopPercentage)}px`);
      return false;
    }
    else {
      root.setProperty('--bgHeight', `${Math.round(window.innerWidth * desktopPercentage)}px`);
      return mobileFlag;
    }
  }

}

export default new mainService();