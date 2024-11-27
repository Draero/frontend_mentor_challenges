import cardView from "./template/view.js";

class generalViewController {
  constructor() {
    this.appelement = document.getElementById("app");
    this.appelement.innerHTML = cardView.getViewTemplate();
  }

  loadListeners() {
    // desktop
    if (window.innerWidth > 750) {
      let img = document.querySelector('.aside-img');
      img.remove();
      let pool = document.querySelector('.pool');
      let aside = document.querySelector('aside');
      setTimeout(() => {
        aside.style.height = pool.offsetHeight + 'px';
      }, 200);
    }
  }
}

export default generalViewController;