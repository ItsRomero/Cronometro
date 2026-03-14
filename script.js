let inicio = 0;
let intervalo = null;
let corriendo = false;

let competidores = [];

function iniciar(){

if(!corriendo){

inicio = Date.now();
intervalo = setInterval(actualizarCronometro,10);
corriendo = true;

}

}

function detener(){

if(corriendo){

clearInterval(intervalo);
corriendo = false;

}

}

function actualizarCronometro(){

let tiempo = Date.now() - inicio;

let segundos = (tiempo / 1000).toFixed(2);

document.getElementById("display").innerText = segundos + " s";

}

function registrar(){

let nombre = document.getElementById("nombre").value;

if(nombre===""){
alert("Ingrese nombre del competidor");
return;
}

let tiempo = (Date.now() - inicio) / 1000;

competidores.push({
nombre:nombre,
tiempo:tiempo
});

mostrar();

document.getElementById("nombre").value="";

}

function mostrar(){

let tabla = document.getElementById("tabla");

tabla.innerHTML="";

competidores.sort((a,b)=>a.tiempo-b.tiempo);

let primero = competidores[0].tiempo;

competidores.forEach((c,index)=>{

let diferencia = (c.tiempo - primero).toFixed(2);

let clase = index===0 ? "ganador" : "";

tabla.innerHTML += `
<tr class="${clase}">
<td>${c.nombre}</td>
<td>${c.tiempo.toFixed(2)}</td>
<td>${diferencia}</td>
</tr>
`;

});

}

function nuevaCarrera(){

competidores=[];

document.getElementById("tabla").innerHTML="";

document.getElementById("display").innerText="0.00 s";

clearInterval(intervalo);

corriendo=false;

}