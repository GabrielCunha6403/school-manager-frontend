import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Disciplina } from './types/types';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {

  private http = inject(HttpClient);

  public listDisciplinas(cdCurso: number) {
    return this.http.get(`${environment.apiUrl}/disciplinas/list`);
  }

  public listProfessores() {
    return this.http.get(`${environment.apiUrl}/disciplinas/listProfessores`);
  }

  public postDisciplina(disciplina: Disciplina) {
    return this.http.post(`${environment.apiUrl}/disciplinas`, disciplina);
  }

  public editDisciplina(disciplina: Disciplina) {
    return this.http.put(`${environment.apiUrl}/disciplinas`, disciplina);
  }

  public getDisciplina(cdDisciplina: number) {
    return this.http.get(`${environment.apiUrl}/disciplinas?cdDisciplina=${cdDisciplina}`);
  }

  public deleteDisciplina(cdDisciplina: number) {
    return this.http.delete(`${environment.apiUrl}/disciplinas?cdDisciplina=${cdDisciplina}`);
  }

}
