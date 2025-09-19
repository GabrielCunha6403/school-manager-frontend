import { User } from "../../users/types/types";

export class Disciplina {
    cdDisciplina: number | null = null;
    nmDisciplina: string = '';
    semestre: number | null = null;
    nrCreditos: number | null = null;
    professores: User[] = []; 
}