
const ingreso=document.getElementById("ingreso");
/* Esperar a que el DOM esté completamente cargado*/
document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('.signup-form form');
  const loginForm = document.querySelector('.login-form form');

  /* Manejar el envío del formulario de registro*/
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    /*crea constante con los valores de registro*/
    const name = signupForm.querySelector('input[placeholder="Ingresa tu nombre"]').value.trim();
    const email = signupForm.querySelector('input[placeholder="Ingresa tu correo electronico"]').value.trim();
    const password = signupForm.querySelector('input[placeholder="Ingresa tu contraseña"]').value;

    /* Validar que todos los campos estén completos*/
    if (!name || !email || !password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    /*Obtener usuarios existentes del localStorage*/
    let users = JSON.parse(localStorage.getItem('users')) || [];

    /* Verificar si el correo ya está registrado*/
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      alert('Este correo electrónico ya está registrado.');/*muestra un mensaje de que ya existe el correo*/
      return;
    }

    /* Agregar el nuevo usuario al array*/
    users.push({ name, email, password });

    /* Guardar el array actualizado en localStorage*/
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registro exitoso. Ahora puedes iniciar sesión.');

    /* Restablecer el formulario*/
    signupForm.reset();

    /* Cambiar a la vista de inicio de sesión*/
    document.getElementById('flip').checked = false;
  });

  /* Manejar el envío del formulario de inicio de sesión*/
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    /*crea constante con los datos de inicio de sesión*/
    const email = loginForm.querySelector('input[placeholder="Ingresa tu correo electronico"]').value.trim();
    const password = loginForm.querySelector('input[placeholder="Ingresa tu contraseña"]').value;

    /* Validar que todos los campos estén completos*/
    if (!email || !password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    /*Obtener usuarios existentes del localStorage*/
    const users = JSON.parse(localStorage.getItem('users')) || [];

    /* Buscar un usuario que coincida con el correo y la contraseña*/
    const user = users.find(user => user.email === email && user.password === password);
    /*si todo se cumple dejará ingresra a la página principal*/
    if (user) {
      alert(`Bienvenido, ${user.name}!`);
      localStorage.setItem('usuarioActual', user.name);
      window.location.href = "index2.html";
    ;
      /* redirigir al usuario a otra página o realizar otras acciones*/
    } else {
      alert('Correo electrónico o contraseña incorrectos.');
    }

    /*Restablecer el formulario*/
    loginForm.reset();
  });
});
/*mediante una función, guarda el datos de nombre para mostralo luego en el perfil*/
function captura(){
  const nombre=document.getElementById("nombreUsuario").value;
  localStorage.setItem("nombreUsuario", nombre);
}

