numero1=0,numero2=0, suma=0,operacion=0
numero1=parseInt(prompt("Ingrese el número 1:  "))
numero2=parseFloat(prompt("Ingrese el número 2:  "))
 
if (numero1 > numero2) {
    suma = numero1 + numero2
    alert(suma)
} else if (numero2 > numero1) {
    operacion = (numero1 * numero1) + (numero2 * numero2)
    alert(operacion);
} else {
    alert("Los números son iguales");
}