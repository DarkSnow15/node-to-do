 const descripcion = {
     demand:true, 
     alias: 'd',
     desc: 'Descripcion de tarea por hacer'
 }
 const completado = {
     default: true,
     alias: 'c',
     desc: 'Marca como completado o pendiente la tarea'
 };
 const argv = require('yargs')
                .command('crear', 'crear elemento por hacer',{
                    descripcion
                })    
                .command('actualizar', 'actualizar elemento por hacer',{
                    descripcion,
                    completado
                })
                .command('borrar', 'borrar elemento por hacer',{
                    descripcion
                })
                .help()
                .argv;

module.exports = {
    argv
}
// comando crear 'Crea to do'
//     --descripcion -d 
// comando crear 'Actualiza to do'
//     --descripcion -d 
//     --compĺetado -c true

//     --help
