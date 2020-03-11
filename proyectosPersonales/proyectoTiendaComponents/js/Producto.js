export class Producto extends HTMLElement {
  constructor() {
    super();

    /*CREO EL SHADOW DOM*/
    //nos crea una barrera bajo la cual no penetra el css
    //es un arbol dom separado del DOM PRINCIPAL
    this.attachShadow({ mode: "open" });
    //los parametros es un objeto al cual le podemos pasar lo que necesitemos
    //ahora #shadow-root es un objeto dentro del producto(mirar html)
  }

  connectedCallback() {
    /*linkamos el estilo externamente en vez de hacerlo desde aqui*/
    this.shadowRoot.innerHTML += `<link
  href="./css/Producto.css"
  rel="stylesheet"
/>`;

    /*ahora lo que queramos tenemos que meter en el DOM DE ESTE ELEMENTO CREADO(este es un dom distinto al principal)*/

    this.shadowRoot.innerHTML += `
    <img
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
}

window.customElements.define("producto-nuevo", Producto);
