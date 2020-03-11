const select = document.querySelector("select");
const commentSection = document.querySelector(".comentarios");
const postSection = document.querySelector(".posts");
const loading = document.querySelector(".loading");

//queremos que nos aparezcan los usuarios nada mas cargar la pagina
window.onload = getJSON().then(usuarios =>
  usuarios.forEach(({id,name}) => 
    //guardamos el id de usuario en el value para poder filtrar en la funcion getUser
    select.innerHTML += `<option value=${id}>${name}</option>`
  )
);

//QUE PASA CUANDO cambio de opcion en el select
select.addEventListener("change", () =>
  //el finally es ejcutado tenga fallo o no, aprovechamos para poner una animacion mientras carga
  getJSON()
    .finally(() => iniciarAnimacion())
    .then(datos => getUser(datos))
    .then(usuarios => getPost(usuarios))
    .then(posts => getComentarios(posts))
    .then(comentarios => printComentarios(comentarios))
    .finally(() => finalizarAnimacion())
);

function iniciarAnimacion() {
  loading.style.display = "initial";
}

function finalizarAnimacion() {
  loading.style.display = "none";
  console.log("terminado de cargar datos");
}

function printComentarios(comentarios) {
  //reiniciamos la pagina
  commentSection.textContent = "";
  //pintamos
  comentarios.forEach(comentario => {
    commentSection.innerHTML += `<div class="comentario">
        <h1>${comentario.name}</h1>
        <p>${comentario.body}</p></div>
      `;
  });
}

function getUser(datos) {
  //devuelve usuario por id, por lo que va a devolver uno
  return new Promise((resolve, reject) =>
    resolve(datos.filter(usuario => usuario.id == select.value))
  );
}

function getPost(user) {
  //buscamos los post de dicho usuario
  return new Promise((resolve, reject) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${user[0].id}`)
      .then(datos => datos.json())
      .then(json => resolve(json))
  );
}

function getComentarios(posts) {
  //----1----
  //PRIMERO
  //PINTAMOS LOS POSTS DEL USUARIO MIENTRAS ESPERAMOS A OBTENER LOS DATOS DE LOS COMENTARIOS (ES ASINCRONO)
  posts.forEach(post => {
    postSection.innerHTML += `<div class="post"><h1 class="post__titulo">${post.title}</h1><p class="post__body">${post.body}</p></div>`;
  });
  //----2----
  // SEGUNDO
  //buscamos los comentarios en la base de datos con dicho id
  return new Promise((resolve, reject) =>
    //cojemos el id del primer post pasado(ya que el resto son iguales)
    fetch(
      `https://jsonplaceholder.typicode.com/comments/?postId=${posts[0].id}`
    )
      .then(datos => datos.json())
      .then(json => resolve(json))
  );
}

function getJSON() {
  //devuelve una promesa que devuleve un error o un succes
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();

    request.open("GET", `https://jsonplaceholder.typicode.com/users`);

    request.send();

    request.onload = function() {
      resolve(JSON.parse(request.responseText));
    };
  });
}
