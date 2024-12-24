import router from "./general/services/router.js";

class Main {

  routing = null;
  navObject = {};

  constructor() {
    window.addEventListener("DOMContentLoaded", this.initialize.bind(this));
    window.addEventListener("hashchange", this.onHashChange.bind(this));
    document.addEventListener("click", this.handleClickOutsideNav.bind(this));
  }

  initialize() {
    if (!this.routing) {
      this.routing = new router(document.getElementById("app"));
    }
    this.navObject = {
      navigation: document.querySelector(".navigation"),
      mainNavA: document.querySelectorAll(".main-nav_a"),
      navArrow: document.querySelector(".nav-arrow"),
      navPool: document.querySelector(".nav-pool"),
    };
    this.routing.refreshView(window.location.hash, this.navObject);
  }

  onHashChange() {
    if (this.routing) {
      this.routing.refreshView(window.location.hash);
    }
  }

  handleClickOutsideNav(event) {
    const htmlClass = event.target.className;
    if (
      !(
        htmlClass === "main-nav" ||
        htmlClass === "nav-input" ||
        htmlClass === "wrapper top" ||
        htmlClass === "wrapper bottom"
      )
    ) {
      document.querySelector(".nav-input").checked = false;
    }
  }
}

export default new Main();