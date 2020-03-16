fetch('http://fakerestapi.azurewebsites.net/posts/', {
  method: "GET",
  // body: JSON.stringify({
  //   title: 'foo',
  //   body: 'bar',
  //   userId: 1
  // }),
  headers: {
    "Content-type": "application/xml"
  }
}).then(consulta => console.log(consulta));
