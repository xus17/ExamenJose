function ejercicio1(cadena){
  var cantparentesis=0 ;
  for(var i =0;i<cadena.length;i++){
    if(cadena.charAt(i)=="("){
      cantparentesis++;
    }
    if(cadena.charAt(i)==")"){
      cantparentesis--;
      if(cantparentesis==-1){
        return false;
      }
    }
  }
  if(cantparentesis==0){
    return true;
  }
}
console.log(ejercicio1("(ccc(ccc)cc((ccc(c))))")); //Ejemplo bien formado
console.log(ejercicio1(")ccc(ccc)cc((ccc(c))))")); // Ejemplo mal formado
