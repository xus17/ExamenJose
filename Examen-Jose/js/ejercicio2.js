class compfecha {
  constructor(dia, mes, ano) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

var arrayfechas= [];

function ejercicio2() {
  var diaInicio = arguments[1].substr(0, 2);
  var mesInicio = arguments[1].substr(3, 2);
  var AnoInicio = arguments[1].substr(6, 5);
  var fechaIncio = new compfecha(diaInicio, mesInicio, AnoInicio);

  var diaFinal = arguments[2].substr(0, 2);
  var mesFinal = arguments[2].substr(3, 2);
  var AnoFinal = arguments[2].substr(6, 5);
  var fechaFinal = new compfecha(diaFinal, mesFinal, AnoFinal);

  for (var i = 0; i < arguments[0].length; i++) {
    var fecha = new compfecha(arguments[0][i].substr(0, 2), arguments[0][i].substr(3, 2), arguments[0][i].substr(6, 5));
    if (comprobarFechInicio(fecha, fechaIncio)) {
      if (comprobarFechFinal(fecha, fechaFinal)) {
        arrayfechas.push(fecha);
      }
    }
  }
  return arrayfechas;

}
var arraycomprobar = [];
arraycomprobar = ejercicio2(["01/03/2016","01,04,2019" ,"02/05/2019", "10/12/2008", "10/01/2018"], "01/01/2018", "01/03/2020");
for(var i=0;i<arraycomprobar.length;i++){
  console.log(arraycomprobar[i]);
}


function comprobarFechInicio(fecha, fechaInicio) {
  if (fechaInicio.ano > fecha.ano) {
    return false;
  }
  if (fechaInicio.mes > fecha.mes) {
    return false;
  }
  if (fechaInicio.dia > fecha.dia) {
    return false;
  }
  return true;
}

function comprobarFechFinal(fecha, fechaFinal) {
  if (fechaFinal.ano < fecha.ano) {
    if (fechaFinal.mes < fecha.mes) {
      if (fechaFinal.dia < fecha.dia) {
        return false;
      }
    }
  }


  return true;
}
