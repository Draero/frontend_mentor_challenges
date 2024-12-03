import resultsView from "./template/view.js";

class generalViewController {
  constructor() {
    this.appelement = document.getElementById("app");
    this.appelement.innerHTML = resultsView.getViewTemplate();
  }

  loadListeners() {
    fetch("./challenges/Results_summary/results_summary_data.json")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("reactionScore").textContent = `${data[0].score} / 100`;
        document.getElementById("memoryScore").textContent = `${data[1].score} / 100`;
        document.getElementById("verbalScore").textContent = `${data[2].score} / 100`;
        document.getElementById("visualScore").textContent = `${data[3].score} / 100`;
        document.getElementById("finalScore").textContent = parseInt(
          data.reduce((acc, el) => acc + el.score, 0) / 4
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

export default generalViewController;