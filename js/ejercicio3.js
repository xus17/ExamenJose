function ejercicio3(){
  var multiplicacion = 1;
  for(var i =0;i<arguments[0].length;i++){
    multiplicacion *=arguments[0][i];
  }
  return multiplicacion;
}

console.log(ejercicio3([1,2,3,4,5]));
