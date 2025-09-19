import { Disciplina } from "../../disciplinas/types/types";

export class User {
    cdUser: number | null = null;
    nmUser: string = '';
    tpUser: TpUser = new TpUser();
    disciplinas: Disciplina[] = []; 
    cpf: string = '';
}

export class TpUser {
    cdTpUser: number | null = null;
    dsTpUser: string = '';
}