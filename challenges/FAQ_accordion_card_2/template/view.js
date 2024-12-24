class cardView {
  constructor () {}

  getViewTemplate () {
    return  `
      <main>
        <div class="pool">
          <div class="bg"></div>
          <section class="faq-card">
            <div class="faq-title">
              <div class="star"></div>
              <h1>FAQs</h1>
            </div>
            <div class="question-list"></div>
          </section>
        </div>
        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz" target="_blank"
            >Frontend Mentor</a
          >. Coded by <a>egg</a>.
        </div>
      </main>
    `;
  }
}

export default new cardView();