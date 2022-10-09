const {crearArchivo} = require('./helpers/multiplicar') 
const colors = require('colors')

const argv = require('./config/yargs')                    
                    
console.clear();

console.log( argv )

console.log( 'base: yargs', argv.b )

crearArchivo( argv.b, argv.l, argv.h )
.then(( salida )=> console.log( salida ))
.catch( err => console.log( err ));

