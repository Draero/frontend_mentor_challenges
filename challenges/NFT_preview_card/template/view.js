class cardView {
  constructor () {}

  getViewTemplate () {
    return  `
      <main>
        <div class="pool">
          <figure>
            <div class="image-container">
              <img src="./challenges/NFT_preview_card/images/image-equilibrium.jpg" alt="">
              <div class="image-bg"></div>
              <div class="image-eye-grid">
                <div class="image-eye-bg"></div>
              </div>
            </div>
            <figcaption>
              <div class="description">
                <h1>Equilibrium #3429</h1>
                <p>
                  Our Equilibrium collection promotes balance and calm.
                </p>
              </div>
              <div class="ethereum-state">
                <div class="ethereum-value-container">
                  <div class="ethereum-img"></div>
                  <p> 0.041 ETH</p>
                </div>
                <div class="left-time-container">
                  <div class="left-clock"></div>
                  <p> 3 days left</p>
                </div>
              </div>
              <div class="equilibrium-creator">
                <div class="creator-info">
                  <div class="creator-photo-container">
                    <div class="creator-photo"></div>
                  </div>
                  <p>Creation of</p><span>Jules Wyvern</span>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U" target="_blank"
            >Frontend Mentor</a
          >. Coded by <a>egg</a>.
        </div>
      </main>
    `;
  }
}

export default new cardView();