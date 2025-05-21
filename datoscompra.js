/*sección para el resuemn de los pedidos*/
document.addEventListener("DOMContentLoaded", () => {/*espera que cargue la pagina*/
  const pedidos = JSON.parse(localStorage.getItem("pedidos"));/*genera una constante con base a los datos de los pedidos guardados previamente*/
  const contenedorPedidos = document.getElementById("contenedorPedidos");
  /*si no hay pedidos guaradaos*/
  if (!pedidos || pedidos.length === 0) {
    contenedorPedidos.textContent = "No hay pedidos para mostrar.";/*muestra un mensaje de que está vacio*/
    return;
  }

  contenedorPedidos.innerHTML = ""; /* borra los datos para mostralos actualizados*/
  /*para cada prodcutos se hace lo siguiente*/
  pedidos.forEach((pedido, index) => {
    const datopedido = document.createElement("div");/* se crea un div*/
    /*style basicos del div*/
    datopedido.style.margin = "10px 0";
    datopedido.style.padding = "10px";
    datopedido.style.borderRadius = "5px";

    /* Datos generales del pedido*/
    const datosHTML = `
      <p>Dirección: ${pedido.direccion || "No disponible"}</p>
      <p>Región: ${pedido.region || "No disponible"}</p>
      <p>Método de pago: ${pedido.metodo || "No disponible"}</p>
      <p>Total: $${pedido.total || "0"}</p>
      <p>ID del pedido: ${pedido.id}</p>
      
    `;
    /*traslada la información hacia la varible del div*/
    datopedido.innerHTML = datosHTML;

    /* Lista de productos*/
    const ul = document.createElement("ul");
    /*esto muestra la lista de productos al carrito*/
    pedido.carrito.forEach(producto => {
      const li = document.createElement("li");
      li.style.display = "flex";
      li.style.alignItems = "center";
      li.style.marginBottom = "5px";
      /*crea la iamgen*/
      const img = document.createElement("img");
      img.src = producto.imagen;
      img.alt = producto.nombre;
      img.style.width = "50px";
      img.style.height = "50px";
      img.style.objectFit = "cover";
      img.style.marginRight = "10px";
      /*muestra los datos en linea*/
      const texto = document.createElement("span");
      texto.textContent = `${producto.nombre} - ${producto.cantidad} x $${producto.precio.toLocaleString("es-CO")}`;
      /*genera los items para que se muestren*/
      li.appendChild(img);
      li.appendChild(texto);
      ul.appendChild(li);
    });
    /*se genera el div para mostrarse*/
    datopedido.appendChild(ul);
    /*se crea un boton para eliminar el pedido*/
    const Eliminar = document.createElement("button");
    Eliminar.textContent = "Eliminar pedido";
    Eliminar.style.marginTop = "10px";
    Eliminar.style.backgroundColor = "#e74c3c";
    Eliminar.style.color = "white";
    Eliminar.style.border = "none";
    Eliminar.style.padding = "5px 10px";
    Eliminar.style.cursor = "pointer";
    Eliminar.style.borderRadius = "3px";
    /*se le añade un evento de click*/
    Eliminar.addEventListener("click", () => {
      /* Eliminar pedido por su índice*/
      pedidos.splice(index, 1);
      localStorage.setItem("pedidos", JSON.stringify(pedidos));
      location.reload(); /* recargar la página para actualizar vista*/
    });
    /*se borra los datos del div*/
    datopedido.appendChild(Eliminar);
    /*hace lo mismo con esta constante para que aparexac el mensaje correspondiente y para que no se muetre nada*/
    contenedorPedidos.appendChild(datopedido);
    
  })
  
});
