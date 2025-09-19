import { inject, Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Curso as CursoType } from "../pages/cursos/types/types";

@Injectable({
  providedIn: 'root'
})
export class Curso {
    private fb = inject(FormBuilder);

    cursoForm: FormGroup = this.newCursoForm();

    newCursoForm(): FormGroup {
        return this.fb.group({
            cdCurso: [null],
            nmCurso: [null, [Validators.required]],
            coordenador: [null, [Validators.required]],
            nrCargaHoraria: [null, [Validators.required]],
        });
    }
    
        setValuesFromCurso(curso: CursoType) {
            this.cursoForm.patchValue({
                cdCurso: curso.cdCurso,
                nmCurso: curso.nmCurso,
                coordenador: curso.coordenador,
                nrCargaHoraria: curso.nrCargaHoraria
            });
        }

    getCursoForm(): FormGroup {
        return this.cursoForm;
    }

}