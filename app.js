//--- Crar tasca amb -d de descripció
// app crear -d "passear al perro"
//--- Listar tasques pendents
// app listar
//--- actulizar si la tasca esta feta
// app actualizar -d "passear al perro" -c true

//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(`Tarea guardada: ${tarea.descripcion}`);
        break;

    case 'listar':
        let listado = porHacer.listarDB();

        for (let i in listado) {
            console.log('========Por Hacer========'.green);
            console.log(`Tarea : ${listado[i].descripcion} `);
            console.log(`Estado: ${listado[i].completado}`);
            console.log('========================='.green);
        }

        //console.log(`Tarea : ${tareas.descripcion} completado: ${tareas.completado}`);
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido!!.'.red);
        break;

}