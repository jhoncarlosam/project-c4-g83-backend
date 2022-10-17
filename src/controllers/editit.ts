import { Request, Response } from "express";
import Deporte from "../models/deporte";
import Equipo from "../models/equipo";
import Evento from "../models/evento";


const logic_deporte = async (request:Request, response:Response) =>{

    const {_id} = request?.body;
    const {nombre} = request?.body;

   let query =  await Deporte.findByIdAndUpdate(_id, { 
        nombre: nombre
    });

    if(!query) return response.status(404).json("not found");

    response.json("todo ok");
};




const logic_equipo = async (request:Request, response:Response) =>{
    
    const {nombre} = request?.body;
    const {_id} = request?.body;

   let query =  await Equipo.findByIdAndUpdate(_id, { 
        nombre: nombre
    });

    if(!query) return response.status(404).json("not found");

    response.json("todo ok");
   
};


const logic_evento = async (request:Request, response:Response) =>{
 
    const {nombre, fecha, marcador, equipo1, equipo2, tipo_deporte, _id} = request?.body;

        let query =  await Evento.findByIdAndUpdate(_id, { 
            nombre:nombre,
            fecha: fecha,
            marcador: marcador,
            equipo1: equipo1,
            equipo2: equipo2,
            tipo_deporte: tipo_deporte
    
        });
    
        if(!query) return response.status(404).json("not found");
    
        response.json("todo ok");
};





export {
    logic_deporte,
    logic_equipo,
    logic_evento
}