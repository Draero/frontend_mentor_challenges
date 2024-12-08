import mainService from "./general/mainservice.js";
import router from "./router.js";

class main {

  routing = {};
  navObject = {};

  constructor () {
    // Listeners for initial loading, hash changing, clicking, and hover
    window.addEventListener("DOMContentLoaded", () => {
      this.routing = new router(document.getElementById("app"));
      this.navObject = {
        navigation: document.querySelector(".navigation"),
        mainNavA: document.querySelectorAll(".main-nav_a"),
        navArrow: document.querySelector(".nav-arrow"),
        navPool: document.querySelector(".nav-pool")
      }
      this.routing.refreshingView(window.location.hash, this.navObject);
    });
    window.addEventListener("hashchange", () => {
      this.routing.refreshingView(window.location.hash);
    });
    document.addEventListener("click", (event) => {
      const htmlClass = event.target.className;
      if (!(
        htmlClass === "main-nav" || 
        htmlClass === "nav-input" || 
        htmlClass === "wrapper top" || 
        htmlClass === "wrapper bottom"))
        document.querySelector(".nav-input").checked = false;
    });
    // -----------------------------------------------
  }

  
}

export default new main();