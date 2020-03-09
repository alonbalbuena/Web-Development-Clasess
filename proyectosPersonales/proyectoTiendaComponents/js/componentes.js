var datosProductos = [
  {
    "src-front": "../imagenes/camiseta.jpg",
    "src-back": "../imagenes/camiseta2.jpg",
    nombre: "camiseta",
    precio: "15€"
  },
  {
    "src-front": "../imagenes/leopardo1.jpg",
    "src-back": "../imagenes/leopardo2.jpg",
    nombre: "leopardo",
    precio: "15€"
  },
  {
    "src-front": "../imagenes/vestido1.jpg",
    "src-back": "../imagenes/vestido2.jpg",
    nombre: "vestido",
    precio: "10€"
  },
  {
    "src-front": "../imagenes/camisa1.jpg",
    "src-back": "../imagenes/camisa2.jpg",
    nombre: "camisa",
    precio: "5€"
  },
  {
    "src-front": "../imagenes/sudadera1.jpg",
    "src-back": "../imagenes/sudadera2.jpg",
    nombre: "sudadera",
    precio: "9€"
  },
  {
    "src-front": "../imagenes/camisetahombre1.jpg",
    "src-back": "../imagenes/camisetahombre2.jpg",
    nombre: "camisetaHombre",
    precio: "7€"
  },
  {
    "src-front": "../imagenes/corazon1.jpg",
    "src-back": "../imagenes/corazaon2.jpg",
    nombre: "corazon",
    precio: "11€"
  }
];

class Producto extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<img
    class="producto__imagen producto__imagen--rotada1"
    src="./imagenes/corazon1.jpg"
  />
  <img
    class="producto__imagen producto__imagen--rotada2"
    src="./imagenes/corazon2.jpg"
  />
  <button class="boton">añadir</button>
  <div class="producto__info">
    <h1 class="producto__info-nombre">Producto 8</h1>
    <p class="producto__info-precio">11€</p>
  </div>`;
  }

  attributeChangedCallback(atributo, viejo, nuevo) {}

  static get observedAttributes() {
    return [""];
  }
}

window.customElements.define("producto-nuevo", Producto);
