/*sección del perfil del usuario*/
document.addEventListener("DOMContentLoaded", function () {
    const start=document.querySelector(".start");/*bton para volver al inicio*/
  start.addEventListener("click", function(){
    window.location.href = "index2.html";
});
});
/*se crea una constante mediante el id*/
const cuenta=document.getElementById("account");
/*cuando se le de click al ícocno de del perfil redirige a la sección del perfil*/
account.addEventListener("click", function(){
    window.location.href = "profile.html";
});

/*espera que cargue la página*/
document.addEventListener("DOMContentLoaded", function () {
  /*crea una constante y la reemplaza con con el dato del nombre guardado*/
    const nombre = localStorage.getItem("nombreUsuario");
    /*si hay un nombre lo que hace es mostrarlo*/
    if (nombre) {
        document.getElementById("nombreMostrado").textContent = nombre;
    }
});
/*crea una variable con por medio del id*/
const cerrar=document.getElementById("close-session");
/*crea un veneto de click*/
cerrar.addEventListener("click", function(){
  /*redirecciona al apartado del login*/
    window.location.href = "index.html";
});



/*sección de la recoemndación de los productos*/
/*llama a la función de guardar*/
function guardar() {
  /*crea una constante por medio del id*/
  const objetivo = document.getElementById("objetivo").value;
  /*guarda el dato de la selección*/
  localStorage.setItem("objetivoSeleccionado", objetivo);
  /*mostrara las recoemndaciones mendiante la función*/
  mostrarCarruselSegunObjetivo(objetivo);
  /*apartado de la sección para cambiar el nombre*/
  const nombre=document.getElementById("nuevoNombre").value;
  /*guarda el dato del nuevo nombre*/
  sessionStorage.setItem("nombreUsuario", nombre);
  /*si hay un dato de nuevo nombre lo muestra*/
  if (nombre) {
        document.getElementById("nombreMostrado").textContent = nombre;
    }
}

/*Función que oculta todos los carruseles y muestra solo el indicado según objetivo*/
function mostrarCarruselSegunObjetivo(objetivo) {
  /*crea un objeto con todos los datos de los carrusles con sus respectivos productos*/
  const carruseles = {
    volumen: "carruselVolumen",
    definicion: "carruselDefinicion",
    rendimiento: "carruselRendimiento"
  };

  /* Ocultaa todos los carruseles*/
  Object.values(carruseles).forEach(id => {
    const carrusel = document.getElementById(id);
    if (carrusel) carrusel.style.display = "none";
  });

  /* Mostrar solo el carrusel seleccionado*/
  const idMostrar = carruseles[objetivo];
  if (idMostrar) {
    const carrusel = document.getElementById(idMostrar);
    if (carrusel) carrusel.style.display = "block";
  }
}

/* Al cargar la página, mostrará el carrusel guardado si existe*/
document.addEventListener("DOMContentLoaded", () => {
  const objetivoGuardado = localStorage.getItem("objetivoSeleccionado");
  if (objetivoGuardado) {
    mostrarCarruselSegunObjetivo(objetivoGuardado);
  }
});
window.addEventListener("DOMContentLoaded", () => {
 const historial=document.getElementById("Confirmarr");
historial.addEventListener("click", () => {/*se llama un evento de click*/

  window.location.href = "index7.html";/*redirige a la sección de el resuemn del prodcuto */
});
});




window.addEventListener("DOMContentLoaded", () => {
 const historiall=document.getElementById("Confirmarrr");
historiall.addEventListener("click", () => {/*se llama un evento de click*/

  window.location.href = "index7.html";/*redirige la sección del resuemn del producto*/
});
});

