// let miNombre = 'elias';
// let miApellido = 'jimenez';
// let miEdad = 34;
// let miMascota = 'Dash';
// let edadMascota = 1;
// console.log(miNombre);
// console.log(miApellido);
// console.log(miEdad);
// console.log(miMascota);
// console.log(edadMascota);
// let nombreCompleto = `${miNombre} ${miApellido}`;
// console.log(nombreCompleto);
// let textoPresentacion = `Hola mi nombre es ${nombreCompleto} tengo ${miEdad}, tengo un gatito su nombre es ${miMascota} y tiene ${edadMascota} añito`;
// let sumaEdades = miEdad + edadMascota;
// let restaEdades = miEdad - edadMascota;
// let productoEdades = miEdad * edadMascota;
// let divisionEdades = miEdad / edadMascota;
// let miNombre = prompt('Escribe tu nombre');
// let miApellido = prompt('Escribe tu apellido');
// let miEdad = parseInt(prompt('Cuantos años tienes'));
// let miMascota = prompt('como se llama tu mascota');
// let edadMascota = parseInt(prompt('que edad tiene tu mascota'));
// console.log(miNombre);
// console.log(miApellido);
// console.log(miEdad);
// console.log(miMascota);
// console.log(edadMascota);
// let nombreCompleto = `${miNombre} ${miApellido}`;
// let textoPresentacion = `Hola mi nombre es ${nombreCompleto} tengo ${miEdad} años, tengo un gatito su nombre es ${miMascota} y tiene ${edadMascota} añito`;
// console.log(textoPresentacion);
// let sumaEdades = miEdad + edadMascota;
// let restaEdades = miEdad - edadMascota;
// let productoEdades = miEdad * edadMascota;
// let divisionEdades = miEdad / edadMascota;
// console.log(sumaEdades)
// console.log(restaEdades)
// console.log(productoEdades)
// console.log(divisionEdades)
// const alumno = {
//     nombre : 'elias',
//     apellido : 'jimenez',
//     edad : 34,
//     pais : 'colombia',
//     cohort : 42
// }
// console.table(alumno)
// console.log(Object.keys(alumno))

// const mascota = {
//     nombre : 'Dash',
//     apellido : 'jimenez',
//     edad : 1,
//     raza : 'criollo',
//     hobbies : 'morder'
// }
// console.table(mascota)
// console.log(Object.keys(mascota))

// let frutas = ['patilla','mango','maracuya','naranja','coco']
// console.table(frutas);
// for(let fruta in frutas){
//     console.log(frutas[fruta]);
// }

// let numeros = [1,2,3,4,5]
// console.log(numeros)
// for(let i in numeros){
//     console.log(numeros[i]);
// }
// let familia = [
//     papa = {
//         nombre : 'Guillermo'
//     },
//     mama = {
//         nombre : 'Nazly'
//     },
//     tia = {
//         nombre : 'Inirida'
//     },
//     hijo = {
//         nombre : 'Elias'
//     },
//     hermano = {
//         nombre : 'Andrea'
//     }
// ]
// console.log(familia);
// for(let i in familia){
//     console.log(familia[i]);
// }
// let textoAleatorio = `${frutas[1]} ${numeros[3]} ${familia[4].nombre}`
// console.log(textoAleatorio);

// let tuEdad = parseInt(prompt('Ingresa tu edad'))
// let compañeroEdad = parseInt(prompt('Ingresa edad de tu compañero'))
// let edad = parseInt(prompt('ingrese su edad'))
// let altura = parseInt(prompt('ingrese su altura'))
// let puedeSubir
// function atraccion(edad,altura) {
//     return edad > 6 && altura > 1.20 ? console.log(`puede subir a la atraccion`) : console.log('false');
// }
// // console.log(atraccion(34,1.70));
// function entrada(pase,saldo){
//     pase = prompt('ingrese su pase')
//     saldo = prompt('ingrese su saldo')
//     puedePasar = `${pase} ${saldo}`
//     pase === 'VIP' || saldo > 1000 ? console.log(`la persona puede pasar ${puedePasar}`) : false
// }
// entrada()


// ========================================================= CONDICIONALES =====================================================
function numeroMayor(num1,num2){
    if(num1 > num2) return 'el primer numero es mayor que el segundo'
}
// console.log( numeroMayor(4,3))

function numerosIguales(num1,num2){
    if(num1 == num2) return 'los numeros son iguales'
    return 'los numeros son diferentes'
}
// console.log(numerosIguales(4,4));

function numeros(num1,num2){
    if(num1 > num2){
        return 'numero 1 es mayor que numero 2'
    }
    else if(num1 < num2){
        return 'numero 2 es mayor que numero 1'
    }
    else {
        return 'son iguales'
    }
}
// console.log(numeros(4,5));
// console.log(numeros(6,5));
// console.log(numeros(5,5));

function pequeño(num1,num2,num3){
    return Math.min(num1,num2,num3)
}
// console.log(pequeño(50,2,300));

const persona1 = {
    nombre : 'elias',
    edad : 38,
    altura : 1.70
}
const persona2 = {
    nombre : 'guillermo',
    edad : 36,
    altura : 1.80,
}
function comparacion(obj1,obj2){
    if(obj1.edad > obj2.edad) console.log(`${obj1.nombre} es mayor que ${obj2.nombre}`);
    if(obj1.edad < obj2.edad) console.log(`${obj2.nombre} es mayor que ${obj1.nombre}`);
    if(obj1.altura < obj2.altura) console.log(`${obj2.nombre} es mas alto que ${obj1.nombre}`);
    if(obj1.altura > obj2.altura) console.log(`${obj1.nombre} es mas alto que ${obj2.nombre}`);
}
// comparacion(persona1,persona2)

function conducir(nombre,edad,altura,vision){
    return edad >= 18 && altura > 150 && vision >= 8 ? `${nombre} puedes conducir` : `${nombre} no puedes conducir`
}
// console.log(conducir('elias',34,170,9))
// console.log(conducir('juan',25,175,7))
// console.log(conducir('carlos',28,175,8))

function entrada(nombre,pase,entrada){
    nombre = prompt('escribe tu nombre')
    pase = prompt('tienes pase "vip" ó "normal"')
    if(nombre === 'elias' || pase === 'vip'){
        return alert('BIENVENIDO')
    }
    entrada = prompt('tienes una entrada?')
    if(entrada === 'si'){
        return alert('BIENVENIDO')
    }
    comprar = prompt('quieres comprar una entrada?')
    if(comprar === 'si'){
        disponible = prompt('cuanto dinero disponible tienes?')
        if(disponible >= 1000){
        alert('entrada comprada, BIENVENIDO')
        }
        else {
            alert('!LO SIENTO! no te alcanza para una la entrada')
        }
    }
    else{
        alert('HASTA PRONTO!!')
    }
}
// entrada()


function adivinar(num){
    let random = Math.round(Math.random()*10)
    console.log(random);
    for(let i = 0; i < 3; i++){
        num = parseInt(prompt('ingresa un numero'))
        if(num > random) console.log('el numero ingresado es mayor vuelve a intentarlo',random)
        if(num < random) console.log('el numero ingresado es menor vuelve a intentarlo',random)
        if(num === random) return alert('Ganaste haz adivinado el numero',random)
    }
}
// adivinar()

function edad(num){
    if(num >= 0 && num <= 12) return console.log('infante');
    else if(num >= 13 && num <= 18) return console.log('adolecente');
    else if(num >= 19 && num <= 45) return console.log('mayor joven');
    else if(num >= 46 && num <= 100) return console.log('anciano');
    else return console.log('en realidad tiene esa edad?');
}
// edad(34)
// edad(16)
// edad(11)
// edad(150)
// edad(72)

function eligeColor(color){
    switch(color){
        case 'Blanco':
        case 'Negro':
            console.log('Falta de color');
        break;
        case 'Verde': console.log('El color de la naturaleza');
        break;
        case 'Azul': console.log('El color del agua');
        break;
        case 'Amarillo': console.log('El color del sol');
        break;
        case 'Rojo': console.log('El color del fuego');
        break;
        case 'Marrón': console.log('El color de la tierra');
        break;
        default: console.log('Excelente eleccion, no lo teniamos pensado');
    }
}
// eligeColor('Blanco')
// eligeColor('Negro')
// eligeColor('Verde')
// eligeColor('Azul')
// eligeColor('Amarillo')
// eligeColor('Rojo')
// eligeColor('Marrón')
// eligeColor('celeste')


function calculadora(operacion,num1,num2){
    if(operacion === 'suma') console.log(num1 + num2)
    if(operacion === 'resta') console.log(num1 - num2)
    if(operacion === 'multiplicacion') console.log(num1 * num2)
    if(operacion === 'division' && num2 !== 0) console.log(num1 / num2)
    else if(num2 === 0) console.log('ERROR');

}
// calculadora('suma',50,50)
// calculadora('resta',10,20)
// calculadora('multiplicacion',50,50)
// calculadora('division',50,10)

