import { Medico } from "./medico.model";
import { Paciente } from "./paciente.model";

export interface ConsultaPesquisada {
    medico: string,
    paciente?: string,
    data: string
}