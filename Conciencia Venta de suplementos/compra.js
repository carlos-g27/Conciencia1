window.addEventListener("DOMContentLoaded", () => {/*se genera el evento cuando cargue el contenido dle html*/
  /*crea varaibles por medio de id*/
  const listacompra = document.getElementById("listaCompraCompleto");
  const totalTexto = document.getElementById("totalCompleto");
  const carritocompra = JSON.parse(localStorage.getItem("carrito")) || [];/*crea una varible y la reemplaza por medio de el aray del carrito guardado*/

  let total = 0;/*crea una varible en 0*/
  /*se crea un item para cad producto*/
  carritocompra.forEach(producto => {
    const item = document.createElement("li");/*se crea un elemento de lista*/
    /*se crea uana imagen con relacion a ala imagen del producto*/
    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = producto.nombre;
    img.style.width = "50px";
    img.style.height = "70px"
    img.style.marginRight = "10px";
    /*se crea un elemento en linea*/
    const texto = document.createElement("span");
    texto.textContent = `${producto.nombre} - ${producto.cantidad} x $${producto.precio.toLocaleString("es-CO")}`;

    /*estilos del item*/
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.marginBottom = "10px";
    /*genera los elemntos para mostralos*/
    item.appendChild(img);
    item.appendChild(texto);
    listacompra.appendChild(item);

    total += producto.precio * producto.cantidad;/*calcula el total*/
  });

  totalTexto.textContent = total.toLocaleString("es-CO");/* lo muestra en pesos colombianos*/

});
/*se añade un vento de de click al boton para confirmar la compra*/
document.getElementById("confirmarCompra").addEventListener("click", () => {
  const direccion = document.getElementById("direccion").value;
  const region = document.getElementById("Region").value;
  const metodo = document.getElementById("metodopago").value;
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const total = document.getElementById("totalCompleto").textContent;

  /* Valida que los campos no estén vacíos*/
  if (!direccion || !region || !metodo) {
    alert("Por favor completa todos los campos.");
    return;
  }
  function generarIdPedido() {
    return Math.floor(100000 + Math.random() * 900000); /* genera un número laeatorio de 6 digitos para el id*/
  }
  /*Construir el objeto del nuevo pedido*/
  const nuevoPedido = {
    id: generarIdPedido(),
    direccion,
    region,
    metodo,
    carrito,
    total,

  };

  /* Recupera los pedidos anteriores o crear array vacío si no hay*/
  const pedidosGuardados = JSON.parse(localStorage.getItem("pedidos")) || [];

  /*Agregar el nuevo pedido al array*/
  pedidosGuardados.push(nuevoPedido);

  /* Guardar el array actualizado en localStorage*/
  localStorage.setItem("pedidos", JSON.stringify(pedidosGuardados));

  /* Vaciar el carrito*/
  localStorage.removeItem("carrito");

  /*y todo esto lo redirige a la sección del resumen de los pedidos*/
  window.location.href = "index7.html";
});
window.addEventListener("DOMContentLoaded", () => {
  const botoncomprar = document.getElementById("comprar");
  botoncomprar.addEventListener("click", () => {/*se llama un evento de click*/

    window.location.href = "index6.html";/*sredirige la sección al carrito ampliado*/
  });
});
window.addEventListener("DOMContentLoaded", () => {
  const historial = document.getElementById("Confirmarr");
  historial.addEventListener("click", () => {/*se llama un evento de click*/

    window.location.href = "index7.html";/*sredirige la sección del resuemn del producto*/
  });
});