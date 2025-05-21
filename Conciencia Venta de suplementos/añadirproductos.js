let carrito = [];
let deseado = [];
/*se crean contantes po medio de los id*/
const botonVerCarrito = document.getElementById("verCarrito");
const menuCarrito = document.getElementById("carritoMenu");
const botonVerDeseado = document.getElementById("verDeseado");
const menuDeseado = document.getElementById("menuDeseado");
const botonAgregar = document.getElementById("botonp");
const botonDeseados = document.getElementById("deseados");
const listaCarrito = document.getElementById("listaCarrito");
const listaDeseado = document.getElementById("listaDeseado");
const totalTexto = document.getElementById("totalCarrito");
const salir= document.getElementById("salir");
const salirr= document.getElementById("salirr");
/*se crea un funcion de mostrar mensaje*/

 
function mostrarMensaje(texto) {
  /*se crea una constante por medio de una id*/
  const mensaje = document.getElementById("mensajeFlotante");
  mensaje.textContent = texto;/*permite cambiar el texto*/
  mensaje.classList.add("visible");/*hace visible el mensaje*/
  mensaje.classList.remove("oculto");/*hace visible el mensaje*/
  /*estblece un tiempo*/
  setTimeout(() => {
    mensaje.classList.remove("visible");/*hace oculto el mensaje*/
    mensaje.classList.add("oculto");/*hace oculto el mensaje*/
  }, 2000); /*se etsablece un teimpo de 2 segundos*/
}


/*se llaman unos venetos de click para hacer visible el menu de carrito y deseados deplegable*/
botonVerCarrito.addEventListener("click", () => menuCarrito.classList.toggle("visible"));
botonVerDeseado.addEventListener("click", () => menuDeseado.classList.toggle("visible"));
salir.addEventListener("click",()=> menuCarrito.classList.toggle("visible"));
salirr.addEventListener("click",()=> menuDeseado.classList.toggle("visible"));
/*se llam un evento cuando se recarge la pagina*/
window.addEventListener("load", function () {
  const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));/*crea una constante y la reemplaza por la información guardada y convertida en elemento array*/
  const deseadoGuardado = JSON.parse(localStorage.getItem("deseado"));/*crea una constante y la reemplaza por la información guardada y convertida en elemento array*/
  /*se verifica que haya infromacion guadaa*/
  if (carritoGuardado) {
    carrito = carritoGuardado;/*se traslada la infromacion al array*/
    carrito.forEach((producto, index) => agregarProductoAlCarrito(producto, index));/*para cada productos llama la funcion para agrgarlos y mostralos en pantalla*/
    actualizarTotal();/*llama la funcion para actualizar el totoal*/
  }
  /*se verifica que haya infromacion guadaa*/
  if (deseadoGuardado) {
    deseado = deseadoGuardado;/*se traslada la infromacion al array*/
    deseado.forEach((producto, index) => agregarProductoADeseado(producto, index));/*para cada productos llama la funcion para agrgarlos y mostralos en pantalla*/
  }
});
/*se llama un evento de click para agregar los produtos al carrito*/
botonAgregar.addEventListener("click", () => {
  const imagen = document.getElementById("imgDetalle").src;/*crea una contante y la llena con un dato del producto*/
  const nombre = document.getElementById("nombreDetalle").textContent;/*crea una contante y la llena con un dato del producto*/
  const precioTexto = document.getElementById("precioDetalle").textContent;/*crea una contante y la llena con un dato del producto*/
  const cantidadTexto = document.getElementById("cantidad").value;/*crea una contante y la llena con un dato del producto*/
  /* a las contantes de precio y cantidad se le conviertye a tipo numbre y se hacen modificaciones en los decimales del precio*/
  const precio = Number(precioTexto.replace("$", "").replace(/\./g, ""));
  const cantidad = Number(cantidadTexto);
  /*se verifica que  no se haya seleccionado cantidad*/
  if (!cantidad) {
    alert("Selecciona una cantidad");/*sale una venta emergente con un mensaje*/
    return;/*acaba el proceso*/
  }
  /*se crea un objeto de producto*/
  const producto = { imagen, nombre, precio, cantidad };
  carrito.push(producto);/*el objeto se añade al fianal de array*/
  localStorage.setItem("carrito", JSON.stringify(carrito));/*se guarda en el almacenamiento local del navegador*/

  agregarProductoAlCarrito(producto, carrito.length - 1);/*se llama a la funcion de agregar para mostrarlo*/
  actualizarTotal(); /*se llama a la funcion de catualizar total*/
  mostrarMensaje("¡Producto agregado al carrito!"); /*muestra un mensaje flotante*/
  menuCarrito.classList.add("visible");/*hace el menu de carrito visible*/
  
 
});
/*hace el mismo proceso para el boton de agregar a deseados*/
botonDeseados.addEventListener("click", () => {
  const imagen = document.getElementById("imgDetalle").src;
  const nombre = document.getElementById("nombreDetalle").textContent;
  const precioTexto = document.getElementById("precioDetalle").textContent;
  const cantidadTexto = document.getElementById("cantidad").value;

  const precio = Number(precioTexto.replace("$", "").replace(/\./g, ""));
  const cantidad = Number(cantidadTexto);

  if (!cantidad) {
    alert("Selecciona una cantidad");
    return;
  }

  const producto = { imagen, nombre, precio, cantidad };
  deseado.push(producto);
  localStorage.setItem("deseado", JSON.stringify(deseado));

  agregarProductoADeseado(producto, deseado.length - 1);
   mostrarMensaje("¡Producto agregado a la lista de deseados!");
  menuDeseado.classList.add("visible");
});

/*se crea uana funcion de trasladar productos*/
function trasladarAlCarrito(index) {
  const producto = deseado[index];/*traslada la infromacion del producto de deseados*/
  carrito.push(producto);/*agrega el producto al carrito*/
  deseado.splice(index, 1);/*se borra el producto de deseados*/
  /*guarda los productos en el almacenamiento del navegador*/
  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("deseado", JSON.stringify(deseado));
  /*borra la infromacón mostrada*/
  listaCarrito.innerHTML = "";
  listaDeseado.innerHTML = "";
  /*muestra la información actualizada*/
  carrito.forEach((producto, i) => agregarProductoAlCarrito(producto, i));
  deseado.forEach((producto, i) => agregarProductoADeseado(producto, i));
  /*se cayualiza el total*/
  actualizarTotal();
  mostrarMensaje("¡Producto agregado al carrito!");/*muestra el mensaje flotante*/
}

/*se crea la funcion de agregar*/
function agregarProductoADeseado(producto, index) {
  const item = document.createElement("li");/*crea un elemento de lista*/
  /*crea una imagen con relacion a la imagen del producto*/
  const img = document.createElement("img");
  img.src = producto.imagen;
  img.alt = producto.nombre;
  img.style.width = "50px";
  img.style.height = "50px";
  img.style.objectFit = "cover";
  img.style.marginRight = "10px";
  /*crea el elemnto en el que se va a mostrar la información del producto*/
  const texto = document.createElement("span");
  texto.textContent = `${producto.nombre} - ${producto.cantidad} x $${producto.precio.toLocaleString("es-CO")}`;/*muestra en pantalla en liena, los elementos del producto*/

  /*crea el boton para trasladar los productos*/
  const botonTrasladar = document.createElement("button");
  botonTrasladar.textContent = "Trasladar al Carrito";
  botonTrasladar.style.marginLeft = "10px";
  botonTrasladar.style.color = "white";
  botonTrasladar.style.background = "green";
  botonTrasladar.style.border = "none";
  botonTrasladar.style.borderRadius = "5px";
  botonTrasladar.style.cursor = "pointer";

  botonTrasladar.addEventListener("click", () => trasladarAlCarrito(index));/*llama al enento click para que llame la funcion correspondiente*/
  /*crea el boton de elmininar los productos*/
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.style.marginLeft = "10px";
  botonEliminar.style.color = "white";
  botonEliminar.style.background = "red";
  botonEliminar.style.border = "none";
  botonEliminar.style.borderRadius = "5px";
  botonEliminar.style.cursor = "pointer";
  /*llama un evento clik para que este llame a la función*/
  botonEliminar.addEventListener("click", () => {
    deseado.splice(index, 1);/*elemina el producto del carrito*/
    localStorage.setItem("deseado", JSON.stringify(deseado));/*guarada las modificaciones*/
    listaDeseado.innerHTML = "";/*borra lo que se muestra en pantalla*/
    deseado.forEach((producto, i) => agregarProductoADeseado(producto, i));/*para cada producoto llama la funcion de aregar*/
    actualizarTotal();/*llama a la funcion actualizar total*/
  });
  /*se establecen estilos al item de la lista*/
  item.style.display = "flex";
  item.style.alignItems = "center";
  item.style.marginBottom = "10px";
  /*genera el producto a mostrar*/
  item.appendChild(img);
  item.appendChild(texto);
  item.appendChild(botonTrasladar);
  item.appendChild(botonEliminar);
  listaDeseado.appendChild(item);
}

/*se hace lo mismo con la lista de deseados*/
function agregarProductoAlCarrito(producto, index) {
  const item = document.createElement("li");

  const img = document.createElement("img");
  img.src = producto.imagen;
  img.alt = producto.nombre;
  img.style.width = "50px";
  img.style.height = "50px";
  img.style.objectFit = "cover";
  img.style.marginRight = "10px";

  const texto = document.createElement("span");
  texto.textContent = `${producto.nombre} - ${producto.cantidad} x $${producto.precio.toLocaleString("es-CO")}`;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.style.marginLeft = "10px";
  botonEliminar.style.color = "white";
  botonEliminar.style.background = "red";
  botonEliminar.style.border = "none";
  botonEliminar.style.borderRadius = "5px";
  botonEliminar.style.cursor = "pointer";

  botonEliminar.addEventListener("click", () => {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    listaCarrito.innerHTML = "";
    carrito.forEach((producto, i) => agregarProductoAlCarrito(producto, i));
    actualizarTotal();
  });

  item.style.display = "flex";
  item.style.alignItems = "center";
  item.style.marginBottom = "10px";

  item.appendChild(img);
  item.appendChild(texto);
  item.appendChild(botonEliminar);
  listaCarrito.appendChild(item);
}

/* se crea la función actualizar total*/
function actualizarTotal() {
  let total = 0;/*crea una variable en 0*/
  carrito.forEach(producto => {
    total += producto.precio * producto.cantidad;/*para cada producto le calcula el total */
  });
  totalTexto.textContent = total.toLocaleString("es-CO");/*el total se muestra en pesos colombianos*/
}

const botonMenuCompleto = document.getElementById("verMenuCompleto");/*se crea una constante mediante el id*/


botonMenuCompleto.addEventListener("click", () => {/*se llama un evento de click*/

  window.location.href = "index4.html";/*sredirige la sección al carrito ampliado*/
});
const botondeseadosCompleto = document.getElementById("verMenuCompletoo");/*se crea una constante mediante el id*/


botondeseadosCompleto.addEventListener("click", () => {/*se llama un evento de click*/

  window.location.href = "index5.html";/*sredirige la sección de deseados ampliado*/
});
window.addEventListener("DOMContentLoaded", () => {
 const botoncomprar=document.getElementById("comprar");
botoncomprar.addEventListener("click", () => {/*se llama un evento de click*/

  window.location.href = "index6.html";/*redirige a la sección del pedido*/
});
});
window.addEventListener("DOMContentLoaded", () => {
 const historial=document.getElementById("Confirmarr");
historial.addEventListener("click", () => {/*se llama un evento de click*/

  window.location.href = "index7.html";/*redirige la sección del resuemn del producto*/
});
});
