import { inject, Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class Disciplina {
    private fb = inject(FormBuilder);

    disciplinaForm: FormGroup = this.newDisciplinaForm();

    newDisciplinaForm(): FormGroup {
        return this.fb.group({
            cdDisciplina: [null],
            nmDisciplina: [null, [Validators.required]],
            professores: this.fb.array([]),
            semestre: [null, [Validators.required]],
            nrCreditos: [null, [Validators.required]],
        });
    }

    getDisciplinaForm(): FormGroup {
        return this.disciplinaForm;
    }

}