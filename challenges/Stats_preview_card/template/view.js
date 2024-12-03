class statsView {
  constructor () {}

  getViewTemplate () {
    return  `
      <main>
        <div class="pool">
          <figure>
            <div class="image-container">
              <picture>
                <source media="(min-width: 1240px)" srcset="./challenges/Stats_preview_card/images/image-header-desktop.jpg">
                <img src="./challenges/Stats_preview_card/images/image-header-mobile.jpg" alt="Meeting_Image">
              </picture>
              <div class="image-opacity-violet"></div>
            </div>
            <figcaption>
              <div class="description">
                <h1>Get <span>insights</span> that help your business grow.</h1>
                <p>
                  Discover the benefits of data analytics and make better decisions
                  regarding revenue, customer experience, and overall efficiency.
                </p>
              </div>
              <div class="stats">
                <div>
                  <h2>10k+</h2>
                  <p>COMPANIES</p>
                </div>
                <div>
                  <h2>314</h2>
                  <p>TEMPLATES</p>
                </div>
                <div>
                  <h2>12M+</h2>
                  <p>QUERIES</p>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62" target="_blank">Frontend Mentor</a>. 
          Coded by <a>egg</a>.
        </div>
      </main>
    `;
  }
}

export default new statsView();