//guardo los div de la fila intermedia
var caja1=document.getElementById("caja1");
var caja1=document.getElementById("caja1");
var caja1=document.getElementById("caja1");
//guardo los nombre de las imagenes originales de la primera fila
var original1=document.getElementById("o1").name;
var original2=document.getElementById("o2").name;
var original3=document.getElementById("o3").name;

//funcion que se ejecuta cuando empiezo a arrastrar un elemento
function start(ev) {
  //guardo el id del elemento que estoy arrastrando
  ev.dataTransfer.setData("name", ev.target.id);
   console.log( ev.target.id);
}
//funcion que se ejecuta cuando paso un elemento por encima, elimino todos los comportamientos que por defecto no permiten hacer un drop
function over(ev) {
  ev.preventDefault();
}
//funcion que se ejecuta al soltar el elemento arrastrado
function drop(elemento,ev) {
  ev.preventDefault();
//compruebo si tiene elementos hijos
  if (elemento.hasChildNodes()) {
    //de se asi,como se que solo tiene uno, elimino el ultimo(el unico que hay)
    elemento.removeChild(elemento.lastChild);
    //modifico el css para cambiar el fondo
    $("#centro").css("background-image","url('imagenesExamen/fondo2.png')");
  }
  //recojo el id del elemento arrastrado que he guardado antes
  var name = ev.dataTransfer.getData("name");
  console.log(name);
  //creo un clone del elemento para no eliminarlo de su posición original
  var item = document.getElementById(name);
  var clone = item.cloneNode(true);
  elemento.appendChild(clone);
}

function comprobar() {
  //si toda la fila tiene una imagen en su interior(un elemento hijo), le extraigo el id de las imagenes
  if (caja1.hasChildNodes() && caja2.hasChildNodes() && caja3.hasChildNodes()) {
    img1=caja1.lastChild.id;
    img2=caja2.lastChild.id;
    img3=caja3.lastChild.id;
    //compruebo si el id de las 3 imagenes corrsponde con en nombre de sus imagenes originales capturado al principio del fichero
    if (img1==original1 && img2==original2 && img3==original3) {
      //si las 3 coinciden, aplico una imagen de fondo verda
      $("#centro").css("background-image","url('imagenesExamen/fondoVerde.png')");
    }else {
      //si no, aplico una imagen de fondo roja
      $("#centro").css("background-image","url('imagenesExamen/fondoRojo.png')");

    }
  }
}
