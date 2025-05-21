/*seccion del catálogo principal de los productos*/
/*se crean constantes con base al ID*/
const botoniz = document.getElementById("b");
const botonde = document.getElementById("j");
const botonizz = document.getElementById("g");
const botondde = document.getElementById("h");
const botonizzz = document.getElementById("y");
const botonddee = document.getElementById("v")
const suplementos = document.getElementById("productos");
const suplementos1 = document.getElementById("productos1")
const suplementos3 = document.getElementById("productos3")
const MMenu = document.getElementById("menuuu")
const Menu = document.getElementById("menu");
const Menuu = document.getElementById("menuu");


/*evento para aparecer el menu despelgable mediaante un click*/
MMenu.addEventListener("click", function () {
  Menu.classList.toggle("visible");
  Menuu.classList.toggle("visible");
  MMenu.classList.toggle("g");


})
/*eventos para cada flecha del carrusel con el objetivo que que desplacen los productos tantos pixeles y hacia que dirección*/
botoniz.addEventListener("click", function () {
  suplementos.scrollLeft -= 400;
});
botonde.addEventListener("click", function () {
  suplementos.scrollLeft += 400;
});
botonizz.addEventListener("click", function () {
  suplementos1.scrollLeft -= 400;
});
botondde.addEventListener("click", function () {
  suplementos1.scrollLeft += 400;
});
botonddee.addEventListener("click", function () {
  suplementos3.scrollLeft += 400;
});
botonizzz.addEventListener("click", function () {
  suplementos3.scrollLeft -= 400;
});
/*este evento traslada los datos del productu al que uno le de click*/
function verproducto(producto) {
  /*crea contante y toam el dato del prodcuto mediante el iD*/
  const nombre = document.getElementById("nombre_" + producto).innerText;
  const precio = document.getElementById("Precio_" + producto).innerText;
  const Des = document.getElementById("Des_" + producto).innerText;
  const imagen = document.getElementById("imagen_" + producto).src;

  /*Guarda el dato en el almacenamiento local del navegador */
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("precio", precio);
  localStorage.setItem("Des", Des);
  localStorage.setItem("imagen", imagen);

  /*todo esos datos se trslandan para el index3 que es el de compra*/
  window.location.href = "index3.html";
}

const botonMenuCompleto1 = document.getElementById("verMenuCompleto1");/*se crea una constante mediante el id*/


botonMenuCompleto1.addEventListener("click", () => {/*se llama un evento de click*/

  window.location.href = "index4.html";/*sredirige la sección al carrito ampliado*/
});
const botondeseadosCompleto1 = document.getElementById("verMenuCompletoo1");/*se crea una constante mediante el id*/


botondeseadosCompleto1.addEventListener("click", () => {/*se llama un evento de click*/

  window.location.href = "index5.html";/*sredirige la sección de deseados ampliado*/
});

window.addEventListener("DOMContentLoaded", () => {
  const botoncomprar = document.getElementById("comprar");
  botoncomprar.addEventListener("click", () => {/*se llama un evento de click*/

    window.location.href = "index6.html";/*redirije a los datos de compra*/
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const historial = document.getElementById("Confirmarr");
  historial.addEventListener("click", () => {/*se llama un evento de click*/

    window.location.href = "index7.html";/*redirije al resuemn del pedido*/
  });
});

/*eventos del boton*/
/*se crea una constante mediante el id*/
const $btnup = document.getElementById("up");
/*le añade un evento de scroll*/
window.addEventListener("scroll", (e) => {
  /*crea una variable con el valor de la posición vertical del scroll*/
  let y = document.documentElement.scrollTop;
  if (y === 0) {
    /*si variable esta 0 pixeles se escondera*/
    $btnup.classList.add("hide");
    $btnup.classList.remove("active");
  } else if (y >= 800) {
    /*si se encuentra a mas de 800 pixeles aparecera*/
    $btnup.classList.add("active");
    $btnup.classList.remove("hide");
  }
});

/*se añade otro evento pero esta vez de click*/
document.addEventListener("click", (e) => {
  /*si hace click en el boton correspondiente se generara la siguiente función*/
  if (e.target === $btnup || e.target.matches(".fa-arrow-up")) {
    /*lo que hara sera subir hasta el principio de la pagina para facilitar el procesos al usuario*/
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  }
});









