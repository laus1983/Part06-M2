let url = "http://localhost:5000/amigos";

let mostrarAmigos = function () {
  $("#lista").empty();
  $.get(`${url}`, function (data) {
    data.forEach((amigo) => {
      let item = document.createElement("li");
      item.innerHTML = amigo.name + " X";
      $("#lista").append(item);
    });
  });
};

$("#boton").click(mostrarAmigos);

$("#search").click(function () {
  let buscador = $("#input").val();
  $.get(`${url}/${buscador}`, function (data) {
    if (data) {
      $("#amigo").text(data.name);
    } else {
      //modificar el server en app.get luego del console.log
      // if(friend){
      //     res.status(200).json(friend);
      //   } else {
      //     res.status(200).json('');
      //   }
      $("#amigo").text(`No existe un amigo con el id ${buscador}`);
    }
    $("#input").val("");
  });
});

$("#delete").click(function () {
  let id = $("#inputDelete").val();
  if (id) {
    let amigo;
    $.get(`${url}/${id}`, function (data) {
      amigo = data;
    });

    $.ajax({
      url: `${url}/${id}`,
      type: "DELETE",
      success: function () {
        $("#sucess").text(`Tu amigo ${amigo.name} fue borrado con exito`);
        $("#inputDelete").val("");
        mostrarAmigos();
      },
    });
  } else {
    $("#sucess").text(`Por favor ingrese un id válido`);
  }
});
