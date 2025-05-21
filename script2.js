/*apartado de compra de los productos*/
document.addEventListener("DOMContentLoaded", () => {/*espera que la página cargue*/
  /*en el index3 hay variables con estos id, lo que hara sera reemplazar la información guardada en el localstorage en dichas varibles para que se muestre*/
  document.getElementById("nombreDetalle").innerText = localStorage.getItem("nombre");
  document.getElementById("precioDetalle").innerText = localStorage.getItem("precio");
  document.getElementById("imgDetalle").src = localStorage.getItem("imagen");
  document.getElementById("DesDetalle").innerText = localStorage.getItem("Des");
  /*estos datso son iamgen, nombre, descripción y precio*/
});

