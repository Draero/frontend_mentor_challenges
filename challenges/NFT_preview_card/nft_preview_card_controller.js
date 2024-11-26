import cardView from "./template/view.js";

class generalViewController {
  constructor() {
    this.appelement = document.getElementById("app");
    this.appelement.innerHTML = cardView.getViewTemplate();
    this.imgBg = document.querySelector(".image-bg");
    this.imageEyeBg = document.querySelector(".image-eye-bg");
  }

  loadListeners() {
    // desktop
    this.imageEyeBg.addEventListener("mousedown", () => {
      this.imgBg.classList.toggle("opacity-cyan-toggle");
      this.imageEyeBg.classList.toggle("image-eye-bg-toggle")
    });
    this.imageEyeBg.addEventListener("mouseup", () => {
      this.imgBg.classList.toggle("opacity-cyan-toggle");
      this.imageEyeBg.classList.toggle("image-eye-bg-toggle")
    });
    // mobile / tablet
    this.imageEyeBg.addEventListener('touchstart', () => {
      this.imgBg.classList.toggle("opacity-cyan-toggle");
      this.imageEyeBg.classList.toggle("image-eye-bg-toggle")
    });
    this.imageEyeBg.addEventListener('touchend', () => {
      this.imgBg.classList.toggle("opacity-cyan-toggle");
      this.imageEyeBg.classList.toggle("image-eye-bg-toggle")
    });
  }
}

export default generalViewController;