const fs = require('fs');
const colors = require('colors')


const crearArchivo = async( base, listar, hasta ) => {

    try {

        let salida  = '';
        let consola = '';
        
        for( let i = 1; i <= hasta; i++) {
            salida  += `${ base } x ${ i } = ${ base * i }\n`
            consola += `${ base } ${ 'X'.yellow } ${ i } ${ '='.yellow } ${ base * i }\n`
        };
        
        if( listar ) {
            console.log(colors.rainbow('============'));
            console.log('   Tabla del: ', base );
            console.log(colors.rainbow('============'));

            console.log( consola )
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida );
    
        return `tabla-${ base }.txt creado` 

    } catch (error) {
        throw error
    }

        


};


module.exports = {
    crearArchivo
}
