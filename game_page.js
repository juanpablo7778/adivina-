nombre_jugador1=localStorage.getItem("nombre_jugador1");
nombre_jugador2=localStorage.getItem("nombre_jugador2"); 
puntos_jugador1=0;
puntos_jugador2=0; 
document.getElementById("nombre_jugador1").innerHTML=nombre_jugador1+":";
document.getElementById("nombre_jugador2").innerHTML=nombre_jugador2+":";
document.getElementById("puntos_jugador1").innerHTML=puntos_jugador1;
document.getElementById("puntos_jugador2").innerHTML=puntos_jugador2;
document.getElementById("pregunta").innerHTML=" turno para preguntar "+ nombre_jugador1;
document.getElementById("respuesta").innerHTML=" turno para responder "+ nombre_jugador2;   
function enviar()
{
obtenervariable=document.getElementById("palabra").value;
palabra=obtenervariable.toLowerCase();
console.log("palabras en minuscula= "+ palabra);

letra1=palabra.charAt(1);

console.log(letra1);

longitud_dividida_2 = Math.floor(palabra.length/2);

letra2=palabra.charAt(longitud_dividida_2);



console.log(letra2);
 longitud_menos_1 = palabra.length - 1; letra3 = palabra.charAt(longitud_menos_1);
 console.log(letra3);
 remove_letra1 = palabra.replace(letra1, "_");
 remove_letra2 = remove_letra1.replace(letra2, "_");
 remove_letra3 = remove_letra2.replace(letra3, "_");
 console.log (remove_letra3);

 palabra_oculta = "<h4 id='word_display'> Q. "+remove_letra3+"</h4>";

 entrada_respuesta = "<br>Respuesta : <input type='text' id='entrada_resp_palabra'>";

boton_enviar = "<br><br><button class='btn btn-info' onclick='comprobar_respuesta()'>Comprobar</button>";

row = palabra_oculta + entrada_respuesta + boton_enviar ;

document.getElementById("salida").innerHTML = row;


document.getElementById("palabra").value = "";

}

turno_pregunta="nombre_jugador1";
turno_respuesta="nombre_jugador2";
function comprobar_respuesta(){
 obtenerrespuesta=document.getElementById("entrada_resp_palabra").value;
 respuesta=obtenerrespuesta.toLowerCase(); 
 console.log("respuesta en minuscula= " + respuesta) ;
 if (respuesta==palabra){

if  (turno_respuesta=="nombre_jugador1" ){
    puntos_jugador1=puntos_jugador1+1;
    document.getElementById ("puntos_jugador1").innerHTML=puntos_jugador1;
 }
 else{
    puntos_jugador2=puntos_jugador2+1;
    document.getElementById ("puntos_jugador2").innerHTML=puntos_jugador2;
 }
}
if  (turno_pregunta=="nombre_jugador1" ){
turno_pregunta="nombre_jugador2"
    document.getElementById ("pregunta").innerHTML="turno para preguntar" + nombre_jugador2;
 }
 else  {
    turno_pregunta="nombre_jugador1";
    document.getElementById ("pregunta").innerHTML="turno para preguntar" + nombre_jugador1;

}

if  (turno_pregunta=="nombre_jugador1" ){
    turno_pregunta="nombre_jugador2"
        document.getElementById ("pregunta").innerHTML="turno para preguntar" + nombre_jugador2;
     }
     else  {
        turno_pregunta="nombre_jugador1";
        document.getElementById ("pregunta").innerHTML="turno para preguntar " + nombre_jugador1;
    
    }


    if  (turno_respuesta=="nombre_jugador1" ){
        turno_respuesta="nombre_jugador2"
            document.getElementById ("respuesta").innerHTML="turno para responder1" + nombre_jugador2;
         }
         else  {
            turno_respuesta="nombre_jugador1";
            document.getElementById ("respuesta").innerHTML="turno para responder" + nombre_jugador1;
        
        }
}