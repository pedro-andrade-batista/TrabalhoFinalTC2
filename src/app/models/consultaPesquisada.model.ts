import { Medico } from './medico.model';
import { Paciente } from './paciente.model';

export interface ConsultaPesquisada {
  id: number;
  medico: string;
  paciente?: string;
  data: string;
}
