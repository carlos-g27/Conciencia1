window.addEventListener("DOMContentLoaded", () => {/*se genera el evento cuando cargue el contenido dle html*/
  /*crea varaibles por medio de id*/
    const lista = document.getElementById("listaMenuCompleto");
    const totalTexto = document.getElementById("totalCompleto");
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];/*crea una varible y la reemplaza por medio de el aray del carrito guardado*/

    let total = 0;/*crea una varible en 0*/ 
    /*se crea un item para cad producto*/
    carrito.forEach(producto => {
      const item = document.createElement("li");/*se crea un elemento de lista*/
      /*se crea uana imagen con relacion a ala imagen del producto*/
      const img = document.createElement("img");
      img.src = producto.imagen;
      img.alt = producto.nombre;
      img.style.width = "150px";
      img.style.height="200px"
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
      lista.appendChild(item);

      total += producto.precio * producto.cantidad;/*calcula el total*/
    });

    totalTexto.textContent = total.toLocaleString("es-CO");/* lo muestra en pesos colombianos*/

  });
  window.addEventListener("DOMContentLoaded", () => {/*se genera el evento cuando cargue el contenido dle html*/
 const listade = document.getElementById("listadeseadosCompleto");
    
    const deseado = JSON.parse(localStorage.getItem("deseado")) || [];/*crea una varible y la reemplaza por medio de el aray del carrito guardado*/
 
    /*se crea un item para cad producto*/
    deseado.forEach(producto => {
      const item = document.createElement("li");/*se crea un elemento de lista*/
      /*se crea uana imagen con relacion a ala imagen del producto*/
      const img = document.createElement("img");
      img.src = producto.imagen;
      img.alt = producto.nombre;
      img.style.width = "150px";
      img.style.height="200px"
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
      listade.appendChild(item);

      
    });
     });
/*espera que el documento haya cargado sus eleemntos correctamente*/
   document.addEventListener("DOMContentLoaded", () => {
  const verdeseados = document.getElementById("verDeseadosCompletoo");/*crea un contante mediante el id*/
  if (verdeseados) {/*verfifac que el id existe*/
    verdeseados.addEventListener("click", () => {/*le añade un evento de click*/
      window.location.href = "index5.html";/*redirige a la sección de la lista de deseados*/
    });
  }
  /*hace lo mismo con esta contante*/
  const volvercarrito = document.getElementById("verCarritoCompletooo");
  if (volvercarrito) {
    volvercarrito.addEventListener("click", () => {
      window.location.href = "index4.html";
    });
  }
});

  
window.addEventListener("DOMContentLoaded", () => {
 const botoncomprar=document.getElementById("comprar");
botoncomprar.addEventListener("click", () => {/*se llama un evento de click*/

  window.location.href = "index6.html";/*sredirige la sección al carrito ampliado*/
});
});
window.addEventListener("DOMContentLoaded", () => {
 const historial=document.getElementById("Confirmarr");
historial.addEventListener("click", () => {/*se llama un evento de click*/

  window.location.href = "index7.html";/*sredirige la sección al carrito ampliado*/
});
});
