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
var boton = document.getElementById("boton");
boton.addEventListener("click", traerDatos);

function traerDatos(){
    console.log("dentro de la funcion");
    //Declaramos const (con cualquier nombre), que contiene una nueva instancia de XMLHTTPREQUEST
    const xhttp = new XMLHttpRequest();
    //métodos de la instancia: OPEN, SEND, RESPUESTA (ONREADYSTATECHANGE)
    //Open define el método, url y sincronico
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users",true);
    //send: envío
    xhttp.send();
    //onreadystatechange: define las funciones de exito
    xhttp.onreadystatechange = function(){
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