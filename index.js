/*
function cargarDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("resultado").innerHTML = this.responseText;
        }

    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.send();
}
*/
/*
var boton = document.getElementById("boton");
boton.addEventListener("click", traerDatos);

function traerDatos(){
    console.log("dentro de la funcion");
    //1. Declaramos const (con cualquier nombre), que contiene una nueva instancia de XMLHTTPREQUEST(objeto)
    const xhttp = new XMLHttpRequest();
    //métodos del objeto: OPEN, SEND, RESPUESTA (ONREADYSTATECHANGE)
    //Open define el método, url y sincronico
    //2.
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users",true);
    //3. send: envío
    xhttp.send();
    //onreadystatechange: define las funciones de exito
    //4.
    xhttp.onreadystatechange = function(){
        //Verifica los estados
        if(this.readyState == 4 && this.status ==200){
            //responseTexto trae todo el JSON, para probar
            //console.log(this.responseText)
            //JSON.parse(): convierte el texto a JSON, y se muestra en consola como array
            let datos = JSON.parse(this.responseText);
            console.log(datos);

            //Ciclo para obtener todos los elementos del array, en este caso, los objetos y sus propieades
            
            let respuesta = document.getElementById("respuesta");
            respuesta.innerHTML = "";

            for (let item of datos){
                //console.log(item);
                respuesta.innerHTML += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.username}</td>
                    <td>@${item.email}</td>
                </tr>
                `
            }
        }
    }
}
*/
//DOLAR Y UF

var dolar = document.querySelector("#dolar");
dolar.addEventListener("click", function(){
    
    obtenerDatos("dolar")
});
var uf = document.querySelector("#uf");
uf.addEventListener("click", function(){

    obtenerDatos("uf")
});
//Función request API
function obtenerDatos(valor){
    //Recibirá el argumento "valor", puede ser dolar o uf
    let url = `https://mindicador.cl/api/${valor}`;
    //1.Declaramos en objeto XMLHttp
    const api = new XMLHttpRequest();
    //2.Establecer método GEO, URL Y ASYNCRONO
    api.open("GET", url, true);
    //3. ENVIAR
    api.send();
    //4. DAR LAS INSTRUCCIONES DE LO QUE QUEREMOS QUE HAGA CUANDO ESTÉ COMPLETA LA PETICIÓN Y CORRECTA
    api.onreadystatechange = function (){
        //ESTADO:200 "SOLICITUD CORRECTA" Y ESTADO:4 "SOLICITUD TERMINADA Y RESPUESTA LISTA"
        if (this.status == 200 && this.readyState == 4){
            let datos = JSON.parse(this.responseText)
            console.log(datos.serie)
            let resultado = document.getElementById("resultado");
            resultado.innerHTML = "";
            for (let item of datos.serie){
                resultado.innerHTML += `<li>${item.fecha.slice(0,10)}   |   ${item.valor}</li>`
                
            }
        }
    }
}