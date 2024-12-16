import cardView from "./template/view.js";

class generalViewController {

  bg = null;
  mobileFlag = false;
  mobilePercentage = 0.6186666667;
  desktopPercentage = 0.2222222222;
  
  constructor () {
    this.appelement = document.getElementById("app");
    this.appelement.innerHTML = cardView.getViewTemplate();
    window.addEventListener("resize", () => {
      this.refreshBg();
    });
  }

  refreshBg (firstLoad) {
    const root = document.documentElement.style;
    if (window.innerWidth <= window.innerHeight && !this.mobileFlag) {
      root.setProperty('--bgImage', 'url("./images/background-pattern-mobile.svg")');
      root.setProperty('--bgHeight', `${Math.round(window.innerWidth * this.mobilePercentage)}px`);
      this.mobileFlag = true;
    }
    else if (window.innerWidth <= window.innerHeight) {
      root.setProperty('--bgHeight', `${Math.round(window.innerWidth * this.mobilePercentage)}px`);
    }
    else if ((window.innerWidth > window.innerHeight && this.mobileFlag) || firstLoad) {
      root.setProperty('--bgImage', 'url("./images/background-pattern-desktop.svg")');
      root.setProperty('--bgHeight', `${Math.round(window.innerWidth * this.desktopPercentage)}px`);
      this.mobileFlag = false;
    }
    else {
      root.setProperty('--bgHeight', `${Math.round(window.innerWidth * this.desktopPercentage)}px`);
    }
  }

  loadListeners () {
    this.bg = document.querySelector(".bg");
    this.refreshBg(true);
  }
}

export default generalViewController;
