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

//CATALOGO DE COMPRAS
class Catalogo {
    constructor(categoria, stock, precio) {
        this.categoria = categoria;
        this.stock = stock;
        this.precio = precio;
    }
    descripcion () {
        alert (`tenemos ${this.stock} ${this.categoria} en stock, a un precio accesible de ${this.precio} pesos`);
    }
}
const instrumentos = new Catalogo ('guitarras', 3, 5000);
const equipos = new Catalogo ('amplificadores', 5, 2000);
const accesorios = new Catalogo ('Cuerdas', 10, 200);
console.log(instrumentos);
console.log(equipos)
console.log(accesorios);