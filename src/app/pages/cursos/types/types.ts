import { Disciplina } from "../../disciplinas/types/types";
import { User } from "../../users/types/types";

export class Curso {
    cdCurso: number | null = null;
    nmCurso: string = '';
    disciplinas: Disciplina[] = [];
    coordenador: User | null = null;
    nrCargaHoraria: number | null = null;
}