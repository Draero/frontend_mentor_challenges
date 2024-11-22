class mainView {
  constructor () {}

  getViewTemplate () {
    return  `
      <main>
        <section class="main-first-section">
          <div class="circular-container">
            <div class="main-first-section_star-icon"></div>
          </div>
          <div>
            <h1>How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
        </section>
        <section class="main-second-section">
          <div class="main-second-section_numbers-buttons">
            <button class="circular-container"><p>1</p></button>
            <button class="circular-container"><p>2</p></button>
            <button class="circular-container"><p>3</p></button>
            <button class="circular-container"><p>4</p></button>
            <button class="circular-container"><p>5</p></button>
          </div>
          <button class="submit-button" type="submit">SUBMIT</button>
        </section>
      </main>
    `;
  }
}

export default new mainView();