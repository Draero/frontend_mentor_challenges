import mainService from "./components/general/main-service.js";
import mainTemplate from "./components/templates/main-view.js";
import secondaryTemplate from "./components/templates/secondary-view.js";

class generalViewController {
  constructor() {
    this.body = document.querySelector("body");
    this.body.innerHTML = mainTemplate.getViewTemplate();
    this.currentButton = false;
    document.addEventListener("DOMContentLoaded", () => {
      this.loadListeners();
    });
  }

  loadListeners() {
    const numbersButtons = document.querySelectorAll(".circular-container");
    this.numbersButtonsListener(numbersButtons);
    const submitButton = document.querySelector(".submit-button");
    this.submitButtonListener(submitButton);
  }

  numbersButtonsListener(numbersButtons) {
    numbersButtons.forEach((button) => {
      button.addEventListener("click", (node) => {
        if (this.currentButton) {
          this.currentButton.classList.toggle("orangeToggle");
          mainService
            .getChildNode(this.currentButton.childNodes, "P")
            .classList.toggle("whiteToggle");
        }
        this.currentButton = node.currentTarget;
        this.currentButton.classList.toggle("orangeToggle");
        mainService
          .getChildNode(this.currentButton.childNodes, "P")
          .classList.toggle("whiteToggle");
      });
    });
  }

  submitButtonListener(submitButton) {
    submitButton.addEventListener("click", () => {
      document.querySelector("main").remove();
      this.body.innerHTML = secondaryTemplate.getViewTemplate(
        this.currentButton.textContent
      );
    });
  }
}

export default new generalViewController();