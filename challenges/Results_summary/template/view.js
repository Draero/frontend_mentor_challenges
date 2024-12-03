class resultsView {
  constructor () {}

  getViewTemplate () {
    return  `
      <main>
        <div class="pool">
          <aside>
            <div class="aside-pool">
              <h3>Your Result</h3>
              <div class="score-circle">
                <div>
                  <h1 id="finalScore"></h1>
                  <p>of 100</p>
                </div>
              </div>
              <h2>Great</h2>
              <p>
                You scored higher than 65% of the people who have taken these tests.
              </p>
            </div>
          </aside>
          <section>
            <div class="section-pool">
              <h3>Summary</h3>
              <div class="category-table">
                <div class="category">
                  <div class="category-left"><div class="icon"></div> <p>Reaction</p></div>
                  <div class="category-right"><span id="reactionScore"></span><p></p></div>
                </div>
                <div class="category">
                  <div class="category-left"><div class="icon"></div> <p>Memory</p></div>
                  <div class="category-right"><span id="memoryScore"></span><p></p></div>
                </div>
                <div class="category">
                  <div class="category-left"><div class="icon"></div> <p>Verbal</p></div>
                  <div class="category-right"><span id="verbalScore"></span><p></p></div>
                </div>
                <div class="category">
                  <div class="category-left"><div class="icon"></div> <p>Visual</p></div>
                  <div class="category-right"><span id="visualScore"></span><p></p></div>
                </div>
              </div>
              <button>Continue</button>
            </div>
          </section>
        </div>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV" target="_blank">Frontend Mentor</a>. 
          Coded by <a>egg</a>.
        </div>
      </main>
    `;
  }
}

export default new resultsView();