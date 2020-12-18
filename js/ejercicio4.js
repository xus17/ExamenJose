window.onload = () => {
  //localStorage.clear();
  if (localStorage.getItem("listatd") != null) {
        listatd = JSON.parse(localStorage.getItem("listatd"));
        listatr = JSON.parse(localStorage.getItem("listatr"));
        elementot = JSON.parse(localStorage.getItem("elementot"));
     dibujartabla(listatd,listatr,elementot);
     console.log("hola");
  }
}
class elementog{
  constructor(color,elementoid){
    this.color = color;
    this.elementoid = elementoid;
  }
}
var listatd = [];
var listatr = [];
var cont=0;
var elementot;

function ejercicio4(){
  var elemento = arguments[3];
  var tabla = document.createElement("table");
    tabla.setAttribute("border", "solid");
    for(var i=0;i<arguments[0];i++){
        listatr.push("idtr"+i);
      if(i%2==0){
        var tr = document.createElement("tr");
        for(var j=0;j<arguments[1];j++){
          listatd.push("id"+cont);
            var td = document.createElement("td");
            td.id="id"+cont;
            cont++;
            td.style.backgroundColor=arguments[2];
            td.textContent="Examen";
            tr.appendChild(td);
          }
      }else{
        var tr = document.createElement("tr");
        for(var j=0;j<arguments[1];j++){
          listatd.push("id"+cont);
            var td = document.createElement("td");
            td.id="id"+cont;
            cont++;
            td.textContent="Examen";
            tr.appendChild(td);
      }
    }

    tabla.appendChild(tr);
    elemento.appendChild(tabla);
    eliminar();
    color =arguments[2];
    elementoid = arguments[3];

  }
  localStorage.setItem("listatd", JSON.stringify(listatd));
  localStorage.setItem("listatr", JSON.stringify(listatr));
  var elementot = new elementog(arguments[2],elemento.id);
  console.log(elemento.id);
  localStorage.setItem("elementot", JSON.stringify(elementot));
}
ejercicio4(10,3,"red",document.getElementById("ele"));

//No me sale con el metodo onClick asi que lo he dejado con el mouseover
function eliminar() {
  for (let i = 0; i < listatd.length; i++) {
    var td = document.getElementById(listatd[i]);
    td.addEventListener("mouseover", function() {
      borrar(event);
    });
  }
}

function borrar(event) {
  var target = event.target;
  target.textContent = '';
}

function dibujartabla(listatd,listatr,elementot){
  var elemento = document.getElementById(elementot.elementoid);
  var tabla = document.createElement("table");
    tabla.setAttribute("border", "solid");
    for(var i=0;i<listatr.length;i++){
      if(i%2==0){
        var tr = document.createElement("tr");
        for(var j=0;j<listatd.length;j++){
            var td = document.createElement("td");
            td.id="id"+j;
            cont++;
            td.style.backgroundColor=elementot.color;
            td.textContent="Examen";
            tr.appendChild(td);
          }
      }else{
        var tr = document.createElement("tr");
        for(var j=0;j<listatd.length;j++){
            var td = document.createElement("td");
            td.id="id"+j;
            cont++;
            td.textContent="Examen";
            tr.appendChild(td);
      }
    }
    console.log(elementot.elementoid);
    tabla.appendChild(tr);
    elemento.appendChild(tabla);
    eliminar();
  }

}
