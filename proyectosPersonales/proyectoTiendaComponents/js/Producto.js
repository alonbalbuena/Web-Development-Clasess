class Producto extends HTMLElement {
  constructor() {
    super();

    /*CREO EL SHADOW DOM*/
    //nos crea una barrera bajo la cual no penetra el css
    //es un arbol dom separado del DOM PRINCIPAL
    this.attachShadow({ mode: "open" });
    //los parametros es un objeto al cual le podemos pasar lo que necesitemos
    //ahora #shadow-root es un objeto dentro del producto(mirar html)

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
  <h1 class="producto__info-nombre">Producto-test</h1>
  <p class="producto__info-precio">00€</p>
  </div>`;

    /*VARIABLES UTILES*/
    this.nombreProducto = this.shadowRoot.querySelector(
      ".producto__info-nombre"
    );
    this.precio = this.shadowRoot.querySelector(".producto__info-precio");
  }

  connectedCallback() {
    /*FUNCIONES DEL DOM*/
    //Introducimos funcion de AGREGAR UN PRODUCTO
    this.shadowRoot
      .querySelector(".boton")
      .addEventListener("click", this.añadirProducto);
  }

  //definimos cuales van a ser las propiedades que definiremos en el producto(IMPORTANTE QUE ES ETATICO)
  static get observedAttributes() {
    return ["data-nombre","data-precio"];
  }

  //SIN OBSERVES ATTRIBUTES NO FUNCIONA
  attributeChangedCallback(name, oldVal, newVal) {
    /*IMportante crear el html en el constructor porque este metodo se usa antes incluso que el connectedCallaback()*/
    switch (name) {
      case "data-nombre":
        this.nombreProducto.textContent = newVal;
        break;
      case "data-precio":
        this.precio.textContent = newVal;
        break;
    }
  }

  añadirProducto() {
    document.querySelector(
      ".seccion-carrito__productos"
    ).innerHTML += `<div class="producto-carrito">
    <img class="producto-carrito__imagen" src = "" alt =" descripcion">
    <p class="producto-carrito__descripcion"></p >
    </div>`;
  }
}

/*DEFINIMOS LA ETIQUETA*/
window.customElements.define("producto-nuevo", Producto);
