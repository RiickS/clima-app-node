const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// argv.direccion

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(9.070000, -63.509998)
//     .then(console.log);


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direcion }`;

    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);