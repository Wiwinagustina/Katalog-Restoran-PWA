class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
        <p>Copyright &copy;2022 - PergiKuliner</p>
    </footer>`;
  }
}

customElements.define('custom-footer', CustomFooter);
