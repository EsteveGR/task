//configuració yargs

const crear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea a realizar'
    }
}

const actualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea a realizar'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendinte la tarea'
    }
}
const borrar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea a realizar'
    }
}


const argv = require('yargs')
    .command('crear', 'Crea una tarea con su -d (descripcion)', crear)
    .command('listar', 'Lista las tareas pendientes')
    .command('actualizar', 'Actualiza una tarea  -d (descripción) -c (Completada)', actualizar)
    .command('borrar', 'Borra una tarea  -d (descripción) ', borrar)
    .help()
    .argv;

module.exports = {
    argv
}