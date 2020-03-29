//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var signo = document.getElementById('signo');
    var potencia = document.getElementById('potencia');
    var radicacion = document.getElementById('radicacion');
  }

//Eventos de click
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}
 signo.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "+/-"
    limpiar();
}
potencia.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "^"
    limpiar();
}
 punto.onclick  = function (e) {
     operandoa = resultado.textContent;
     operancion = ".";
     limpiar();
 }
radicacion.onclick = function (e) {
    operandoa = resultado.textContent;
    operacion = "√2"
    limpiar();
    
}

function limpiar(){
    resultado.textContent = "";
  }
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
      case "+/-":
        if (operandoa) {
           res = - parseFloat(operandoa);
           break;
        } else {
           res = - parseFloat(operandob);
           break;
        }   
      //case ".":
        //res = (parseFloat(operandoa).toString + '.' + parseFloat(operandoa).toString);
        //break;
      case "√2":
          res = Math.sqrt(parseFloat(operandoa));
         
          break;  
      case "^":
        switch (operandob) {
          case "0":
            res = (parseFloat(operandoa) * 0 ) + 1;
            break;
          case "1":
            res = parseFloat(operandoa) * 1 ;
            break;
          case "2":
            res = parseFloat(operandoa) * parseFloat(operandoa);
            break;
          case "3":
            res = parseFloat(operandoa) * parseFloat(operandoa) * parseFloat(operandoa);
            break;
          case "4":
            res = parseFloat(operandoa) * parseFloat(operandoa) * parseFloat(operandoa) * parseFloat(operandoa);
            break;
          case "5":
            res = parseFloat(operandoa) * parseFloat(operandoa) * parseFloat(operandoa)  * parseFloat(operandoa) * parseFloat(operandoa);
            break;
        }
       break;
    }
 resetear();
 resultado.textContent = res;
}