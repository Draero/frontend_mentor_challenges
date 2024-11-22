import router from "./router.js";

class main {

  routing = {};

  constructor () {
    // Listeners for initial loading and hash changing
    window.addEventListener("DOMContentLoaded", () => {
      this.routing = new router(document.getElementById("app"));
      this.routing.refreshingView(window.location.hash);
    });
    window.addEventListener("hashchange", () => {
      this.routing.refreshingView(window.location.hash);
    });
    // -----------------------------------------------
  }

  
}

export default new main();