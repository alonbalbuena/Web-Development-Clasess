class CajaNueva extends HTMLElement {
  constructor() {
    super();
    this.hola = "hola";
  }

  connectedCallback() {
    this.innerHTML = `<div>
    <p>${this.hola}</p>
    </div>`;
  }
}

window.customElements.define("caja-nueva", CajaNueva);
