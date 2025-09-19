import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private http = inject(HttpClient);

  listCursos() {
    return this.http.get(`${environment.apiUrl}/cursos/list`);
  }

  listProfessoresFromCurso(cdCurso: number) {
    return this.http.get(`${environment.apiUrl}/cursos/listProfessoresFromCurso?cdCurso=${cdCurso}`);
  }

  listCoordenadores() {
    return this.http.get(`${environment.apiUrl}/cursos/listCoordenadores`);
  }

  getCurso(cdCurso: number) {
    return this.http.get(`${environment.apiUrl}/cursos?cdCurso=${cdCurso}`);
  }

  postCurso(curso: any) {
    return this.http.post(`${environment.apiUrl}/cursos`, curso);
  }

  editCurso(curso: any) {
    return this.http.put(`${environment.apiUrl}/cursos`, curso);
  }

  deleteCurso(cdCurso: number) {
    return this.http.delete(`${environment.apiUrl}/cursos?cdCurso=${cdCurso}`);
  }

}
