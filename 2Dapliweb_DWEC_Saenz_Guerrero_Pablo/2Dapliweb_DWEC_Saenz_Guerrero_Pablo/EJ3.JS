// EJERCICIO 1
// Escribir un programa que calcule el índice de masa corporal redondeado a 2
// decimales 
// let masa = 80;
// let altura = 1.81;

// function ind(alt, ma) {
//     return (ma/(alt*alt)).toFixed(2);
// }
// ind(altura,masa);
// console.log(ind(altura,masa)); 

// EJERCICIO 2
// Escribir un programa que convierta una cantidad de días a horas, minutos y
// segundos. Usar templates para mostrar todos los datos.  
//  let cantDias = 3;

// function diaH (dia) {

//     return dia*24;
// }
// function diaM (dia) {

//     return 60*diaH(dia);
// }
// function diaS (dia) {

//     return dia*diaM(dia)*60;
// }
// document.write(`${cantDias} dias: <br> ${diaH(cantDias)} horas <br>${diaM(cantDias)} minutos<br> ${diaS(cantDias)} segundos`); 

// EJERCICIO 3
// Utilizando una estructura switch-case realizar un traductor sencillo de inglés a
// español para las palabras cat, dog, yellow y sleep (podéis añadir más palabras
// si queréis). Cualquier otra palabra no tienen traducción y se tiene que informar
// al usuario. 

// let cadenaIntro = prompt("Que palabra quieres traducir: 'cat', 'dog', 'yellow' o 'sleep'").toLowerCase();
// trad(cadenaIntro);
// function trad(cad) {
//     switch (cad) {
//         case "cat":
//                 document.write(`${cad} significa: gato`);
//             break;

//         case "dog":
//                 document.write(`${cad} significa: Perro`);
//             break;
//         case "yellow":
//                 document.write(`${cad} significa: Amarillo`);
//             break;
//         case "sleep":
//                 document.write(`${cad} significa: Dormir`);
//             break;
    
//         default:
//             document.write("Esa palabra no existe");
//             break;
//     }
// } 

// EJERCICIO 4
// Escribir un programa que dado un string muestre el mismo, pero con los
// caracteres ordenados alfabéticamente. Usa split, sort y join.  

// let cadena = "yAczBg";
// function ordenar(cad){
//     let x = cadena.split("").sort((a,b)=> a.localeCompare(b)).join("");
//     return console.log(x); 
// }
// ordenar(cadena);


// EJERCICIO 5
// Escribir un programa que dado un string muestre el mismo, pero con los
// caracteres en orden inverso. Usa split, reverse y join 

// let cadena = "yAczBg";
// function ordReversa(cad){
//     let nose2 = cadena.split("").sort().reverse().join("");
//     return console.log(nose2); 
// }
// ordReversa(cadena);

// EJERCICIO 6
// Escribir un programa que dada una cadena de caracteres muestre cada palabra
// que contiene y su frecuencia de aparición. (suponemos que las palabras solo
// están separadas por espacios)  

// let cadena = "Hola soy hambre HOla hola";

// function mostrador(cad) {
//    let sep = cad.toLowerCase().split(" ");
//    sep.forEach(element => {
//         let rep =0;
//         for (let i = 0; i < sep.length; i++) {
//          if (sep[i]===element) {
//             rep++;
//             sep[i] ="";
//            }            
//         }
//         if (element !=="") {
//             console.log(`${element} ha salido ${rep} veces`);
//         }
        
//    });
// }
// mostrador(cadena);

// EJERCICIO 7
// Escribir un programa que partiendo del ejercicio anterior nos muestre solo la
// palabra más repetida. 
// let cadena = "Hola soy hambre HOla hola";
// function separ(cad) {
//    let sep = cad.toLowerCase().split(" ");
//    let masrep = [sep[0], 1];
//    sep.forEach(element => {
//         let rep =0;
//         for (let i = 0; i< sep.length; i++) {
//          if (sep[i]===element) {
//             rep++;
//             sep[i] ="";
//            }            
//         }
//         if (element !=="") {
//             console.log(`${element} ha salido ${rep} veces`);
//             if (rep > masrep[1]) {
//                 masrep[0] = element;
//                 masrep[1] = rep;
//             }
//         }       
//    });
//    console.log("la palabra mas repetida es '"+masrep[0]+ "' "+masrep[1]);
// }
// separ(cadena); 

// EJERCICIO 8
// Pedir al usuario que escriba una cadena de caracteres y devuelva un objeto con
// cada palabra que contiene y su frecuencia de aparición.

// let datosD = prompt("Escribe un cadena de palabras separadas por espacios");
// function separ(cad) {
//    let sep = cad.split(" ");
//    let obj = {};
//    sep.forEach(element => {
//         let rep =0;
//         for (let i = 0; i < sep.length; i++) {
//          if (sep[i]===element) {
//             rep++;
//             sep[i] ="";
//            }            
//         }
//         if (element !=="") {
//             obj[element] =rep;

//         }       
//    });
//    console.log(obj);
//    return obj;
   
// }
// separ(datosD); 

// EJERCICIO 9
// Escribir un programa que almacene un objeto con las horas de clase de las
// asignaturas de un curso, por ejemplo:
// {'Matemáticas': 60, 'Física': 45, 'Química': 53} y después muestre la siguiente
// información:
// • Suma de las horas de todas las asignaturas.
// • Nombre Asignatura con más horas.
// • Un objeto con solo las asignaturas con menos horas (poned
// vosotros el límite).

// let obj = {
//     'Matemáticas': 2, 
//     'Física': 45, 
//     'Química': 53,
//     'Histiria':12,
//     'Biologia':30,
//     'Perodismo':1
// };

// console.log(obj);
// document.write("<table  border = '1'>");
// document.write("<tr><th>Asignaturas</th><th>Horas</th></tr>");
// for(let asigna in obj){
//     document.write("<tr>");
//         document.write(`<td>${asigna}</td><td>${obj[asigna]}</td>`);
//     document.write("</tr>");
// }
// document.write("</table");

// let suma = 0 ;
// for (let asigna in obj) {
//     suma += obj[asigna];
// }

// document.write("<br>");
// document.write(`La suma de todas las horas es un total de ${suma}`);

// let asig = "";
// let max = 0;
// for(let asi in obj){
//     if(obj[asi] > max) max = obj[asi];
// }
// for(let asi in obj){    
//     if(obj[asi] === max){
//         document.write(`<br> la asiganatura con mas horas es ${asi}`);
//     }
// }

// document.write("<br>");
// let objM = {};
// for(let asigna in obj){
//     if(obj[asigna]<60){
//         objM[asigna] = obj[asigna];
//     }
// }

// document.write("<br>");
// document.write("<table  border = '1'>");
// document.write("<tr><th>Asignaturas</th><th>Horas</th></tr>");
// for(let asigna in objM){
//     document.write("<tr>");
//         document.write(`<td>${asigna}</td><td>${objM[asigna]}</td>`);
//     document.write("</tr>");
// }
// document.write("</table");



// EJERCICIO 10 / 11
// Escribir un programa que, partiendo de una estructura de datos con los precios de las frutas de una tienda, permita realizar las siguientes acciones:
// • Subir el precio un 10% a todas las frutas.
// • Dado un numero de kilos y una fruta mostrar el total a pagar,tenido en cuenta mayúsculas y minúsculas y si existe o no la frutaen la tienda.
// • Mostrar la fruta con menor precio.

// let frutas = {
//     'platano': 1.35,
//     'Manzana': 0.80,
//     'Pera': 0.85,
//     'Naranja': 0.70,
// }

// document.write("<table border ='1'>");
// document.write("<tr><th>Fruta</th><th>Precio</th></tr>");
// for (let fruta in frutas) {
//     document.write("<tr>");
//     document.write(`<td>${fruta}</td><td>${frutas[fruta]}</td>`);
//     document.write("</tr>");
// }
// document.write("</table>");

// function iva() {
//     document.write("<br>");
//     document.write("<table border ='1'>");
//     document.write("<tr><th>Fruta</th><th>Precio del Kg</th></tr>");
//     for (let fruta in frutas) {
//         document.write("<tr>");
//         document.write("<td>" + fruta + "</td><td>" + (frutas[fruta] * 1.10).toFixed(2) + "</td>");
//         document.write("</tr>");
//     }
//     document.write("</table>");
// }
// iva();

// let kilos = 32;
// let fruti = "manzana";
// let cont = 0;
// function cobrar(fruti, kilos) {
    
//     document.write("<br>");
//     for (let fruta in frutas) {
//         if (fruta.toLowerCase() === fruti.toLowerCase()) {
//             let pagar = (kilos * frutas[fruta]).toFixed(2);
//             return document.write(`Para la ${fruta}, por ${kilos} kilos hay que pagar ${pagar}`);
//             break;
//         } else {
//             cont++;
//         }
//     }
//     if (cont == Object.keys(frutas).length) {
//         document.write("Notenemos esa fruta aqui.");
//     }
// }
// document.write(cobrar(fruti, kilos));
// document.write("<br>");

// function menorP(frut) {
//     frut = Object.entries(frutas);
//     frut = frut.sort((a, b) => a[1] - b[1]);
//     return document.write(frut[0][0] + " precio " + frut[0][1]);
// }
// menorP(frutas);

// EJERCICIO 12
// Crea un programa que pida al usuario que escriba una fecha en formato 
// "dd/mm/yyyy y muestre el día, el mes y el año por separado. 

// let dia = prompt("Escribe una fecha en este formato xx/xx/xxxx");

//         function mossepdia(params) {
//             let sepDia = params.split('/');
//             let resp = "";
//             sepDia.forEach(element => {
//                 resp += element + " ";
//             });
//             console.log(resp);
//         }
//         mossepdia(dia);

//         function met(params) {
//             let sepDia = params.split('/');
//             let fecha = new Date(sepDia[2], sepDia[1] - 1, sepDia[0]);

//             let opciones = { day: 'numeric', month: 'long', year: 'numeric' };
//             console.log(fecha.toLocaleDateString('es-ES', opciones));
//         }
//         met(dia); 
// EJERCICIO 13
// Escribe un programa que tome una oración y reemplace todas las letras "a" con 
// "x", todas las letras "e" con "y" y todas las letras "i" con "z" 

// let frase = "hola buenos dias se";

// function ej13(params) {
//    let nfrase =  params.replaceAll('a', 'x').replaceAll('e','y').replaceAll('i','z');
//     console.log(nfrase);
// }
// ej13(frase);
 
// EJERCICIO 14
// Crea un programa que tome una lista de nombres separados por comas y
// muestre los nombres en orden alfabético. 

// let pr = ["alex","barbara","daniel","carlos"];
// let ordenado = pr.sort();
// console.log(ordenado);

// EJERCICIO 15
// Escribe un programa que tome una cadena de texto y elimine todas las vocales
// (a, e, i, o, u) de la misma.

// let cad = "alas menos  huevo hilo";

// function eliminar(cad){
//     let cad2 = cad.replaceAll('a', '').replaceAll('e', '').replaceAll('i', '').replaceAll('o', '').replaceAll('u', '');
//     console.log(cad2);
// }
// eliminar(cad);

// EJERCICIO 16
// Escribe una función que tome dos arreglos de números y devuelva un nuevo
// arreglo que contenga los elementos que son comunes en ambos arreglos.

// let a1 = [1,2,3,4,5];
// let a2 = [1,1,5,5,5];
// function combinar(a1, a2){
//     let a3 = [];
//     for(let i = 0; i<a1.length; i++){
//         for(let j= 0; j<a2.length;j++){
//             if(a1[i]===a2[j]){               
//                 a3.push(a1[i]);
//                 break;
//             }
//         }
//     }
//     return a3;
// }
// combinar(a1,a2);
// console.log(combinar(a1,a2));

// EJERCICIO 17
// Tenemos el siguiente array:
// let usuarios = [
// {nombre : "Susana", apellido: "Lozano"},
// {nombre : "Antonio", apellido: "Sotillo"},
// {nombre : "Iván", apellido: "Merino"}
// ];
// Devolver un array uniendo los nombres y apellidos;

// let usuarios = [
//     {nombre : "Susana", apellido: "Lozano"},
//     {nombre : "Antonio", apellido: "Sotillo"},
//     {nombre : "Iván", apellido: "Merino"}
// ];
// let aux=[];
// for (const key in usuarios) {
//     aux.push(usuarios[key].nombre +" "+ usuarios[key].apellido);
// }
// console.log(aux);

// EJERCICIO 18
// Crear un programa JavaScript donde se introduzca un número de kilómetros que
// corre un Runner al día. Según los kilómetros recorridos a la semana se clasifica
// a los Runners en las siguientes categorías usando los siguientes intervalos.
// Suponemos que un Runner corre los 7 días de la semana los mismos kilómetros
// al día.
// INTERVALO CATEGORIA
// 0<KILOMETROS<=10 Corredor novato
// 10<KILOMETROS<=30 Corredor iniciado
// 30<KILOMETROS<=40 Corredor experto
// KILOMETROS>=50 Corredor nivel Élite
// Se debe mostrar mediante document.write la categoría del Runner. Si el usuario
// escribe un número negativo se debe mostrar un mensaje de error.

// let kilo = prompt("Cuantos kilometros has corrido");
// let cont = 0;

// sex(kilo);
// function sex(kilo){
//     kilo *= 7;
//     if(kilo<0){
//         console.log("Cantidad no valida");
//     }else if(kilo<=10){
//         console.log("Correrdor novato");
//     }else if(kilo>10 && kilo<=30){
//         console.log("Correrdor iniciado");
//     }else if(kilo>30 && kilo<=40){
//         console.log("Correrdor experto");
//     }else if(kilo>=50){
//         console.log("Correrdor nivel Élite");
//     }
// }

// EJERCICIO 20
// El presupuesto de una obra se distribuye en los siguientes conceptos:
// • 50% de materiales.
// • 20% mano de obras.
// • 30% en licencias de obra.
// Crear un programa JavaScript que pida mediante un prompt el presupuesto total
// de la obra y que muestre mediante document.write una lista ordenada del coste
// de cada concepto. Si el usuario introduce un presupuesto negativo mostrar un
// mensaje de error dentro de un h1.

// let kilo = prompt("Cuanto presupuesto hay");
//         let c1 = 0;
//         let c2 = 0;
//         let c3 = 0;

//         obra(kilo);
//         function obra(kilo) {

//             if (kilo < 0) {
//                 document.write("<h1>Cantidad no valida</h1>");
//             }else{
//                 c1 = kilo*0.5;
//                 c2 = kilo*0.2;
//                 c3 = kilo*0.3;
//                 document.write("<h1>En materiales hemos gastado "+c1+"€, en mano de obra hemos gasatado "+c2+"€ y en licencias hemos gastado "+c3+"€</h1>")
//             }
//         }



































