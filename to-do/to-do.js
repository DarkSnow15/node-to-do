const fs = require('fs');

let listadoToDo = [];

const crear = (descripcion) =>{
    let toDo = {
        descripcion,
        completado: false
    };

    cargarDb();
    listadoToDo.push(toDo);
    guardarDb();
    return toDo;
}

const cargarDb = () => {
    try{
        listadoToDo = require('../db/data.json');
    }catch(error){
        listadoToDo= [];
    }
    
}

const getListado = () => {
    cargarDb();
    return listadoToDo;
}

const actualizar = (descripcion, completado =true) => {
    cargarDb();
    let index = listadoToDo.findIndex(tarea  => tarea.descripcion === descripcion);
    if(index >= 0){
        listadoToDo[index].completado = completado;
        guardarDb();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDb();
    let nuevoListado = listadoToDo.filter(tarea  => tarea.descripcion !== descripcion);
    if(listadoToDo.length === nuevoListado.length){
        return false;
    }else{
        listadoToDo = nuevoListado;
        guardarDb();
        return true;
    }
}

const guardarDb = () =>{
    let data = JSON.stringify(listadoToDo);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error(`Guardado en db`);
    });
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}