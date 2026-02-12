const productos = [
    {
        id:'1',
        name:'Amplificador SOPHIA 1C',
        description: "SI-RAS-1C ",
        stock:20,
        price:1056,
        category: 'Servidores',
        img:'../img/server.svg'
    },
    {
        id:'2',
        name:'Amplificador SOPHIA Light',
        description: "SI-RASL",
        stock:15,
        price:1766,
        category: 'Servidores',
        img:'../img/server.svg'
    },

    {
        id:'3',
        name:'Amplificador SOPHIA Full',
        description: "SI-RASF",
        stock:32,
        price:2629,
        category: 'Servidores',
        img:'../img/server.svg'
    },

    {
        id:'4',
        name:'Servidor Spotify',
        description: "SI-SPY",
        stock:48,
        price:271,
        category: 'Servidores',
        img:'../img/server.svg'
    },

    {
        id:'5',
        name:'Extensor/Repetidor de WiBus',
        description: "SI-LWB",
        stock:47,
        price:39,
        category: 'Servidores',
        img:'../img/lwb.svg'
    },

    
    {
        id:'6',
        name:'Controladora de Ambiente',
        description: "SI-RC882RD",
        stock:47,
        price:803,
        category: 'Controladoras',
        img:'../img/Controladora-Ambiente.svg'
    },

    {
        id:'7',
        name:'Controlador Bus Remoto',
        description: "SI-SBC",
        stock:24,
        price:561,
        category: 'Controladoras',
        img:'../img/bus-controller.svg'
    },

    {
        id:'8',
        name:'Zona de Audio Estéreo 50W',
        description: "SI-RA50W",
        stock:33,
        price:450,
        category: 'Controladoras',
        img:'../img/Amplificador.svg'
    },


    {
        id:'9',
        name:'Zona de Audio Estéreo 1000W',
        description: "SI-RA100W",
        stock:45,
        price:550,
        category: 'Controladoras',
        img:'../img/Amplificador.svg'
    },

    {
        id:'10',
        name:'LED inteligente blanco cálido',
        description: "SI-SL07W",
        stock:65,
        price:18,
        category: 'SmartLed',
        img:'../img/led-4.svg'
    },
{
        id:'11',
        name:'LED inteligente RGBW',
        description: "SI-SL86",
        stock:69,
        price:25,
        category: 'SmartLed',
        img:'../img/led-5.svg'
    },
{
        id:'12',
        name:'LED inteligente blanco cálido AR111',
        description: "SI-SL006W AR111",
        stock:67,
        price:42,
        category: 'SmartLed',
        img:'../img/LED.svg'
    },
{
        id:'13',
        name:'Smart Led WiBus',
        description: "SI-SL01GU10",
        stock:76,
        price:25,
        category: 'SmartLed',
        img:'../img/led-2.svg'
    },
{
        id:'14',
        name:'Cerradura Digital Protocolo SOPHIA',
        description: "SI-DLT-S",
        stock:13,
        price:219,
        category: 'SmartLocks',
        img:'../img/lock-3.svg'
    },
{
        id:'15',
        name:'Cerradura Digital Semi-automática',
        description: "SI-DLSA-S",
        stock:76,
        price:195,
        category: 'SmartLocks',
        img:'../img/lock-2.svg'
    },
{
        id:'16',
        name:'Cerradura Digital Automática Full ',
        description: "SI-DLFA-S",
        stock:23,
        price:295,
        category: 'SmartLocks',
        img:'../img/lock-1.svg'
    },
{
        id:'17',
        name:' Tecla GAIA 2 canales Táctil Blanco',
        description: "SI-GAIA2-WI",
        stock:45,
        price:115,
        category: 'SmartTouch',
        img:'../img/gaia-white-2.svg'
    },
{
        id:'18',
        name:'Tecla GAIA 2 canales Táctil Negro',
        description: "SI-GAIA2-BL",
        stock:90,
        price:115,
        category: 'SmartTouch',
        img:'../img/gaia-black-2.svg'
    },
{
        id:'19',
        name:'Tecla GAIA 4 canales Táctil Blanco',
        description: "SI-GAIA4-WI",
        stock:35,
        price:169,
        category: 'SmartTouch',
        img:'../img/gaia-white-4.svg'
    },
{
        id:'20',
        name:'Tecla GAIA 4 canales Táctil Negro',
        description: "SI-GAIA4-BL",
        stock:53,
        price:169,
        category: 'SmartTouch',
        img:'../img/gaia-black-4.svg'
    },
{
        id:'21',
        name:'Panel de Control 4”',
        description: "SI-SP4",
        stock:57,
        price:249,
        category: 'SmartTouch',
        img:'../img/panel-4.svg'
    },
{
        id:'22',
        name:'Panel LYRA by SOPHIA',
        description: "SI-RP",
        stock:15,
        price:123,
        category: 'SmartRoof',
        img:'../img/Lyra.svg'
    },
{
        id:'23',
        name:'Controladora LYRA by SOPHIA',
        description: "SI-SRC",
        stock:43,
        price:420,
        category: 'SmartRoof',
        img:'../img/server.svg'
    },
{
        id:'24',
        name:'Controladora LIVO by SOPHIA',
        description: "SI-LRC",
        stock:65,
        price:18,
        category: 'SmartRoof',
        img:'../img/server.svg'
    },
{
        id:'25',
        name:'Panel LIVO by SOPHIA',
        description: "SI-IRP",
        stock:65,
        price:18,
        category: 'SmartRoof',
        img:'../img/Livo.svg'
    },
    
]

let error = false
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (error) {
      reject('Hubo un error, intente más tarde');
    } else {
      resolve(productos);
    }
  });
};


export const getOneProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = productos.find((prod) => prod.id === id);
      if (product) {
        resolve(product);
      } else {
        reject("Producto no encontrado");
      }
    }, 500); 
  });
};
