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
            <div class="question-list">
              <div class="question">
                <div class="question-pool">
                  <p class="question-text">
                    What is Frontend Mentor, and how will it help me?
                  </p>
                  <div class="expandSymbol"></div>
                </div>
                <p class="question-answer">
                  Frontend Mentor offers realistic coding challenges to help
                  developers improve their frontend coding skills with projects in
                  HTML, CSS, and JavaScript. It's suitable for all levels and ideal
                  for portflio building.
                </p>
              </div>
              <div class="hr"></div>
              <div class="question">
                <div class="question-pool">
                  <p class="question-text">Is Frontend Mentor free?</p>
                  <div class="expandSymbol"></div>
                </div>
                <p class="question-answer">
                  Frontend Mentor offers both free and premium options. Free users
                  can access a selection of challenges to practice frontend
                  development skills, while premium members gain additional benefits
                  such as detailed design files, professional-level challenges, and
                  mentorship opportunities.
                </p>
              </div>
              <div class="hr"></div>
              <div class="question">
                <div class="question-pool">
                  <p class="question-text">
                    Can I use Frontend Mentor projects in my portfolio?
                  </p>
                  <div class="expandSymbol"></div>
                </div>
                <p class="question-answer">
                  Yes, you can use our projects in your portfolio. Frontend Mentor
                  encourages users to showcase their solutions, as long as proper
                  credit is given to Frontend Mentor for the designs. This helps
                  demonstrate your coding skills and ability to translate designs
                  into functional websites.
                </p>
              </div>
              <div class="hr"></div>
              <div class="question">
                <div class="question-pool">
                  <p class="question-text">
                    How can I get help if I'm stuck on a challenge?
                  </p>
                  <div class="expandSymbol"></div>
                </div>
                <p class="question-answer">
                  If you’re stuck, try reading the challenge again, looking up
                  tutorials or guides online, or asking for help in the Frontend
                  Mentor community. You can also check out other people’s solutions
                  for inspiration. Getting stuck is normal, so don’t be afraid to
                  ask for help!
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    `;
  }
}

export default new cardView();