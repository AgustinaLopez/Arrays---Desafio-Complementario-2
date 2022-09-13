let cantidad = 0;
let precio = 0;
let costo= 0;
let seguirCotizando = false;


const Economico = ["All Star Movies", "All Star Music", "All Star Sports"];
const Moderado = ["Caribbean Beach Resort", "Coronado Spring", "Port Orleans Resort"];
const Deluxe = ["Grand Floridian", "Contemporany Resort", "Animal Kingdom Lodge" ];

const tickets = ["Un parque-Un día", "Dos parques-Un dia"];

let nombreIngresado= prompt ("Hola! Cotizamos tu paquete Disney! ¿Cual es tu nombre?");
let correoIngresado= prompt ("Hola "+ nombreIngresado+ "! Dejanos tu correo electronico" );



do{
    let producto= prompt ("¿Que te gustaría cotizar? Hotel+Tickets , Solo Hotel, Solo Tickets, Memory Maker, Plan de Comidas, Tour VIP", "Ej:Hotel+Tickets");
    cantidad = parseInt (prompt("¿Cuantas personas viajan?"));

 switch (producto){
    case 'Hotel+Tickets':
        precio= 3000
        prompt ("¿Que tipo de Hotel prefieres? - Economico, Moderado o Deluxe", "Ej:Moderado")
        if ("Economico"){
          console.log (Economico.join (','));
         }else if ("Moderado"){
          console.log (Moderado.join (','));
         }
        else ("Deluxe")
         console.log (Deluxe.join (','));
        prompt ("¿Que tipo de Tickets Necesitas? - Un parque-Un día, Dos parques-Un dia" , "Ej: Un parque-Un día ")
        break;
    case 'Solo Hotel':
        precio= 2500
        prompt ("¿Que tipo de Hotel prefieres? - Economico, Moderado o Deluxe", "Ej:Moderado")
        if ("Economico"){
          console.log (Economico.join (','));
         }else if ("Moderado"){
          console.log (Moderado.join (','));
         }
         else ("Deluxe")
         console.log (Deluxe.join (','));
        break;
    case 'Solo Tickets':
        precio= 1000
        prompt ("¿Que tipo de Tickets Necesitas? - Un parque-Un día, Dos parques-Un dia" , "Ej: Un parque-Un día ")
        break;
    case "Memory Maker":
          costo = 200;
        break;
    case "Plan de Comidas":
          costo = 600;
        break;
    case "Tour VIP":
          costo = 1500;
        break;    
    default:
    alert ("No se ajusta a lo que buscas? Dejanos tu contacto!");
    precio=0
  }
  

 seguirCotizando= confirm("¿Quieres agregar más cosas a tu paquete?");

} while (seguirCotizando);


console.log(precio)
console.log(cantidad)
console.log (costo)
let precioTotal = (precio * cantidad) + (costo * cantidad);
console.log(precioTotal)

//const Hoteles= {Economico, Moderado, Deluxe};
//const paqueteFinal:{}
//for (hotel of Hoteles){
   //console.log ("");
//}

alert ('El costo total del paquete es de: $ '+precioTotal);

let finalizarCotizacion= confirm("¿Desea finalizar su cotización?")



if(finalizarCotizacion) alert ("Tu cotización ha sido enviada a tu correo electronico!");
else {alert ("Consultanos tus dudas por whatsapp!")};
