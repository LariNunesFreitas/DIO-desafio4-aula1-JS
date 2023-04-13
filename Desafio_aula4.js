/* IMC = peso / (altura * altura)

Abaixo de 18.5 abaixo do peso;
Entre 18.5 e 25 peso normal;
Entre 25 e 30 acima do peso;
Entre 30 e 40 obeso;
Acima de 40 obesidade grave;
*/

const peso = 68;
const altura = 1.77;

const imc = peso / Math.pow(altura, 2);

console.log(imc.toFixed(2));

if (imc < 18.5){
    console.log(`Abaixo do peso`);
} else if (imc >= 18.5 && imc < 25){
    console.log(`Peso normal`);
} else if (imc >= 25 && imc < 30){
    console.log(`Acima do peso`);
} else if (imc >= 30 && imc < 40){
    console.log(`Obeso`);
} else {
    console.log(`Obesidade Grave`);
}