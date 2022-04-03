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
        alert (`tenemos ${this.stock} ${this.categoria} en stock, a un precio accesible de ${this.precio} pesos c/u`);
    }
    preguntaVendedor () {
        let respuesta = parseInt(prompt ('Cuanta cantidad desea comprar??'));
        while ((respuesta == 0) || (respuesta > `${this.stock}`)) {
            alert ('Cantidad invalida o supera el monto en stock disponible');
            respuesta = parseInt(prompt ('Cuanta cantidad desea comprar??'));
        }
        let precioFinal = respuesta * `${this.precio}`;
        alert (`Excelente, el monto total a pagar quedaria en ${precioFinal} pesos!, muchas gracias por su compra!`);
    }
}
const instrumentos = new Catalogo ('guitarras', 3, 5000);
const equipos = new Catalogo ('amplificadores', 5, 2000);
const accesorios = new Catalogo ('Cuerdas', 10, 200);
const indumentaria = new Catalogo ('remeras', 30, 500);
console.log(instrumentos);
console.log(equipos)
console.log(accesorios);
console.log(indumentaria);

//SELECCION DE COMPRA DE CATALOGO
let usuarioCompra = prompt ('Quieres comprar guitarras, amplificadores o cuerdas??, tambien tenemos indumentaria');
switch (usuarioCompra) {
    case "guitarras":
        instrumentos.descripcion();
        instrumentos.preguntaVendedor();
        break;
    case "amplificadores":
        equipos.descripcion();
        equipos.preguntaVendedor();
        break;
    case "cuerdas":
        accesorios.descripcion();
        accesorios.preguntaVendedor();
        break;
    case "indumentaria":
        indumentaria.descripcion();
        indumentaria.preguntaVendedor();
        break;
    default:
        alert('Lo siento, ya no tenemos de eso');
        break;
}