import statsView from "./template/view.js";

class generalViewController {
  constructor() {
    this.appelement = document.getElementById("app");
    this.appelement.innerHTML = statsView.getViewTemplate();
    this.opacityViolet = document.querySelector('.image-opacity-violet');
    this.figcaption = document.querySelector('figcaption');
    this.img = document.querySelector('img');
    this.pool = document.querySelector('.pool');
  }

  loadListeners() {
    let sizeHeight = "", sizeWidth = "";
    this.observer = new ResizeObserver(entry => {
      sizeHeight = entry[0].target.height;
      sizeWidth = (entry[0].target.width * 180) / 100;
      if (window.innerWidth > 1240) {
        this.pool.style.height = `${sizeHeight}px`;
        this.figcaption.style.width = `${sizeWidth}px`;
        this.opacityViolet.style.height = `${sizeHeight}px`;
      }
      else {
        this.opacityViolet.style.height = `${sizeHeight}px`;
        this.pool.style.height = "81rem";
        this.figcaption.style.width = "100%"
      }
    });
    this.observer.observe(this.img);
  }
}

export default generalViewController;