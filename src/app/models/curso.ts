import { inject, Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
            nmCoordenador: [null, [Validators.required]],
            cargaHoraria: [null, [Validators.required]],
        });
    }

    getCursoForm(): FormGroup {
        return this.cursoForm;
    }

}