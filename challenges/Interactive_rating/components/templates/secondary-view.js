class secondaryView {
  constructor () {}

  getViewTemplate (selectedNumber) {
    return `
      <main class="alternative-padding">
        <section class="main-first-section">
          <div class="main-first-section_image-container">
            <img src="./images/illustration-thank-you.svg" alt="Thank You! (img)" />
          </div>
          <div class="main-first-section_selection-message-container"><p>You selected ${selectedNumber} out of 5</p></div>
        </section>
        <section class="main-second-section text-center">
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </section>
      </main>
    `;
  }
}

export default new secondaryView();