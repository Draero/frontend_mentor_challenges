class cardView {
  constructor () {}

  getViewTemplate () {
    return  `
      <main>
        <div class="pool">
          <aside>
            <img class="aside-img" src="./challenges/Product_preview_card/images/image-product-mobile.jpg" alt="Fragance Image">
          </aside>
          <section>
            <p>P E R F U M E</p>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p>A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</p>
            <div class="price"><h2>$149.99</h2><p>$169.99</p></div>
            <button>
              <div class="svg-shop-cart"></div><p>Add to Cart</p>
            </button>
          </section>
        </div>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa" target="_blank">Frontend Mentor</a>. 
          Coded by <a>egg</a>.
        </div>
      </main>
    `;
  }
}

export default new cardView();