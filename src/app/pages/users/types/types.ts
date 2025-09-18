export class User {
    cdUser: number | null = null;
    nmUser: string = '';
    tpUser: TpUser = new TpUser();
    cpf: string = '';
}

export class TpUser {
    cdTpUser: number | null = null;
    dsTpUser: string = '';
}