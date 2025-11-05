// // console.log("HOLA MUNDO2");
// // //Crear un programa que identifique cuantos multiplos de 3 hay en un rango del 0 al 100 y que los imprima en consola.

// // let num = 0;
// // for (let i = 0; i <= 100; i++) {
// //   if (i % 3 === 0) {
// //     console.log(i);
// //     num++;
// //   }
// // }
// // console.log("Total de múltiplos de 3 entre 0 y 100 es: " + num);

// import os from "os";

// console.log("Información del sistema:");


import os from "os";
function infosistema() {
  // console.log(os);

  // const memory = (os.freemem / 1024);
  // console.log(memory);
  
  //ARQUITECTURA DEL SISTEMA
  console.log(os.arch());

  //NUCLEOS DE LA CPU
  console.log(os.availableParallelism());
  
  //INFORMACIÓN DE LA CPU 
  console.log(os.cpus());

  //MEMORIA LIBRE EN BYTES
  console.log(os.freemem());

  // PRIORIDAD DEL PROCESO DEL SISTEMA
  console.log(os.getPriority());

  // RUTA DEL DIRECTORIO DEL USUARIO
  console.log(os.homedir());

  // NOMBRE DEL EQUIPO -HOST
  console.log(os.hostname());
  
  // PROCESOS EN SEGUNDO PLANO
  console.log(os.loadavg());

  // INTERFACES DE RED DEL SISTEMA
  console.log(os.networkInterfaces());
  
  // PLATAFORMA DEL SISTEMA OPERATIVO
  console.log(os.platform());

  // VERSIÓN DEL SISTEMA OPERATIVO
  console.log(os.release());

  // console.log(os.setPriority());

  // DIRECTORIO TEMPORAL DEL SISTEMA OPERATIVO
  console.log(os.tmpdir());

  // MEMORIA TOTAL
  console.log(os.totalmem());
  
  // TIPO DE SISTEMA OPERATIVO
  console.log(os.type());

  // INFORMACIÓN DEL USUARIO
  console.log(os.userInfo());

  // TIEMPO DE ACTIVIDAD DEL SISTEMA
  console.log(os.uptime());

  // VERSIÓN DEL SISTEMA OPERATIVO
  console.log(os.version());

  // ARQUITECTURA DE LA MÁQUINA
  console.log(os.machine());
  
  // CONSTANTES DEL SISTEMA OPERATIVO
  // console.log(constants);
  
}
infosistema();
  
  
  

  
  
  
  
  

  