"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var mongoose_1 = __importStar(require("mongoose"));
var schema = mongoose_1["default"].Schema;
var Equipo = mongoose_1["default"].model("Equipo");
var EventoScheme = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: true
    },
    fecha: String,
    marcador: String,
    equipo1: { type: schema.Types.ObjectId, ref: "Equipo" },
    equipo2: { type: schema.Types.ObjectId, ref: "Equipo" },
    tipo_deporte: String
});
module.exports = (0, mongoose_1.model)("Evento", EventoScheme);
//# sourceMappingURL=evento.js.map