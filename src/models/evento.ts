import {Schema, model} from "mongoose"


let EventoScheme:Schema= new Schema({
    nombre: {
        type: String,
        require: true,
    },
    fecha: String,
    marcador: String,
    equipo1: String,
    equipo2: String,
    tipo_deporte: String
}); 


export = model("Evento", EventoScheme);