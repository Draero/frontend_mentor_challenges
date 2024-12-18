import cardView from "./template/view.js";
import mainservice from "../../general/mainservice.js";

class generalViewController {

  bg = null;
  mobileFlag = false;
  mobilePercentage = 0.6186666667;
  desktopPercentage = 0.2222222222;
  
  constructor () {
    this.appelement = document.getElementById("app");
    this.appelement.innerHTML = cardView.getViewTemplate();
    window.addEventListener("resize", () => {
      this.mobileFlag = mainservice.refreshBg(false, this.mobileFlag, this.mobilePercentage, this.desktopPercentage);
    });
  }

  loadListeners () {
    this.bg = document.querySelector(".bg");
    this.mobileFlag = mainservice.refreshBg(true, this.mobileFlag, this.mobilePercentage, this.desktopPercentage);
  }
}

export default generalViewController;
