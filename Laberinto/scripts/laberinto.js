// Función que se ejecuta cuando se hace clic en el botón
document.getElementById("boton").addEventListener("click", function() {
    var imagenDiv = document.getElementById("imagen");
    var imageUrl = "./pngegg.png"; // URL de la imagen

    // Comprobar si la imagen ya está establecida
    if (imagenDiv.style.backgroundImage === "none") {
        // Establecer el estilo de fondo con la imagen y configurar para que se ajuste al tamaño y no se repita
        imagenDiv.style.backgroundImage = "url('" + imageUrl + "')";
        imagenDiv.style.backgroundSize = "contain";
        imagenDiv.style.backgroundRepeat = "no-repeat";
    } else {
        // Eliminar la imagen
        clearImage();
    }
});

// Función para eliminar la imagen
function clearImage() {
    var imagenDiv = document.getElementById("imagen");
    imagenDiv.style.backgroundImage = "none";
}

function tablaAuto(){
    for(let renglon=1; renglon<=17; renglon++){
        var tr = document.createElement("tr");
        tr.className = "fila" + renglon;
        document.getElementById("automatico").appendChild(tr)
            for(let columna=1; columna<=10; columna++){
                var fila = document.getElementsByClassName("fila"+renglon)
                // console.log(fila[0]);
                var td = document.createElement("td");
                td.className = "cuadro";
                td.id = "R"+renglon+"C"+columna;
                // td.innerText = "Fila "+ r +" Columna " + h
                fila[0].appendChild(td);
            }
    }
}

tablaAuto();


function pintarHover(){
    var cuadrosHover = document.getElementById.querySelectorAll("#R1C1");
    //cuadrosHover.forEach(this.backgroundColor = "blue");
    cuadrosHover[0].style.backgroundColor = "white";
}

pintarHover();
