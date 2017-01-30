//array de noticias
var noticias=["Noticia 1:Federer gana a Nadal.", "Notici 2: Reconocimiento a Blasco Ibañez.", "Noticia 3:Madonna y U2 serán del Hard Rock Valencia."];
//gestionamos evento click para los botones de las noticias
$(".noticia").on("click",function () {
  //obtenemos id del boton
  var id=$(this).attr("id");
  console.log(noticias[parseInt(id)]);
  //aplicamos la noticia que obtenemos de buscar el id en el array
  //los id van de 0 a 2;
  $("#contenido").text(noticias[parseInt(id)]);
  //elimina todas las clases
  $("#contenido").removeClass();
  //segun el id aplica una clase u otra
  switch (id) {
    case "0":
      $("#contenido").addClass("azul");
      break;
    case "1":
      $("#contenido").addClass("rojo");
      break;
    case "2":
      $("#contenido").addClass("amarillo");
      break;
  }

});
//gestiona el evento del raton para cuando salga del parrafo
$("#contenido").on("mouseleave",function() {
  //elimino clases y seteo el texto
  $("#contenido").removeClass();
  $("#contenido").text("");
});
//gestiono el boton de añadir texto a la noticia 1
$("#add").on("click",function () {
  //compruebo que el input no esta vacio
  if ($("#nuevo").val()) {
    //capturo el valor
    var valor=$("#nuevo").val();
    //lo añado a promer elemento de las noticias, la noticia 1
    noticias[0]=noticias[0]+valor;
    //vacio el input
    $("#nuevo").val("");
  }

})
