import cardView from "./template/view.js";
import mainservice from "../../general/services/mainservice.js";

class generalViewController {

  bg = null;
  mobileFlag = [false, "resize"];
  mobilePercentage = 0.6186666667;
  desktopPercentage = 0.2222222222;
  data = [];
  accChildHeights = {};
  
  constructor () {
    this.appelement = document.getElementById("app");
    this.appelement.innerHTML = cardView.getViewTemplate();
    this.bg = document.querySelector(".bg");
    window.addEventListener("resize", () => {
      this.mobileFlag = mainservice.refreshBg(false, this.mobileFlag, this.mobilePercentage, this.desktopPercentage, 720);
      if (this.mobileFlag[1] === "resize") this.addAccElements();
    });
  }

  addAccElements () {
    let clean = true;
    this.data.forEach((e, i) => {
      this.accChildHeights = mainservice.accordionElement(
        clean,
        "question-list", 
        e.question, 
        e.answer, 
        i,
        this.data.length,
        this.accChildHeights
      );
      if (i === 0) clean = false;
    });
    this.addQuestionListener();
  }

  addQuestionListener () {
    document.querySelectorAll(".question").forEach(e => {
      const questionList = e.parentElement;
      const questionPool = e.children[0];
      const expandSymbol = questionPool.children[1];
      const index = Array.from(questionList.children).indexOf(e);
      questionPool.addEventListener("click", () => {
        const heights = this.accChildHeights[`${index}`];
        if (!heights.dropDown)
          e.style.height = `${heights.qTextHeight + heights.qAnswerHeight}px`;
        else e.style.height = `${heights.qTextHeight}px`;
        heights.dropDown = !heights.dropDown;
        expandSymbol.classList.toggle("expandSymbol-minus");
      });
    });
  }

  loadListeners () {
    this.mobileFlag = mainservice.refreshBg(true, this.mobileFlag, this.mobilePercentage, this.desktopPercentage, 720);
    fetch("./challenges/FAQ_accordion_card_2/faq_accordion_card_data.json")
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
        this.addAccElements();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

export default generalViewController;
