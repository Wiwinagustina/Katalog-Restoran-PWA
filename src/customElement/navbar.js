class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav>
    <a class="brands" href="/">PergiKuliner</a>

    <button id="burger" class="hamburger" href="#" aria-label="navigation-menu"><i class='fas fa-bars'></i></button>

    <ul id="sidebar" class="sidebar">
      <li><a href="/" aria-label="Home">Home</a></li>
      <li><a href="#/Favorite" aria-label="Favorite">Favorite</a> </li>
      <li><a href="https://www.linkedin.com/in/wiwin-agustina-2b6281249/" aria-label="About">About us</a></li>
    </ul>
  </nav>`;
  }
}

customElements.define('custom-navbar', CustomFooter);
