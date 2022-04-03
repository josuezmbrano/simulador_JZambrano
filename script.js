// INGRESO DE USUARIO A LA PLATAFORMA Y REGISTRO
function registrarUsuario () {
    while ((nombreUsuario == "") || (apellidoUsuario == "")) {
        alert ('Faltaron datos, por favor verifica que has ingresado la informacion requerida');
        nombreUsuario = prompt('Cual es tu nombre??');
        apellidoUsuario = prompt ('Cual es tu apellido??');
    }
    alert (`Bienvenido ${nombreUsuario} ${apellidoUsuario} a nuestro sitio web!`);
}
let nombreUsuario = prompt('Cual es tu nombre??');
let apellidoUsuario = prompt ('Cual es tu apellido??');
registrarUsuario ();