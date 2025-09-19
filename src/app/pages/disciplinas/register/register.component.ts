import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../util/page-header/page-header.component';
import { Button } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputMaskModule } from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/multiselect';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';
import { Disciplina } from '../../../models/disciplina';
import { Disciplina as DisciplinaType } from '../types/types';
import { DisciplinasService } from '../disciplinas.service';
import { User } from '../../users/types/types';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    PageHeaderComponent,
    Button,
    InputText,
    InputNumber,
    SelectModule,
    RouterLink,
    FormsModule,
    InputMaskModule,
    MultiSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy, OnInit {
  private disciplina = inject(Disciplina);
  private service = inject(DisciplinasService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private message = inject(MessageService);
  private formBuilder = inject(FormBuilder);

  public isEdit = this.route.snapshot.paramMap.get('cdDisciplina') != null;
  public cdDisciplina = this.route.snapshot.paramMap.get('cdDisciplina');
  public cdCurso = this.route.snapshot.paramMap.get('cdCurso');
  public disciplinaForm = this.disciplina.getDisciplinaForm();
  public selectedProfessores: User[] = [];
  public listProfessores: User[] = [];

  async ngOnInit(): Promise<void> {
    await this.listarProfessores();
    if(this.isEdit) {
      this.loadDisciplina(); 
    }
  }

  loadDisciplina() {
    this.service.getDisciplina(parseInt(this.cdDisciplina!)).subscribe(res => {
      const resDisciplina = res as DisciplinaType;
      this.disciplina.setValuesFromDisciplina(resDisciplina);

      this.selectedProfessores = this.listProfessores.filter(prof =>
        resDisciplina.professores.some(p => p.cdUser === prof.cdUser)
      );
    });
  }

  ngOnDestroy(): void {
    this.disciplina.disciplinaForm.reset();
  }

  onProfessoresChange(selected: User[]) {
    this.selectedProfessores = selected;
  }

  listarProfessores(): Promise<void> {
    return new Promise(resolve => {
      this.service.listProfessores().subscribe(res => {
        this.listProfessores = res as User[];
        resolve();
      });
    });
  }

  async saveDisciplina() {
    const disciplina = {
      ...this.disciplinaForm.value,
      professores: this.selectedProfessores
    };

    if(this.isEdit) {
      this.service.editDisciplina(disciplina).subscribe((res: any) => {
        this.message.add({ severity: 'success', summary: `Disciplina ${res.nmDisciplina} atualizada com sucesso!` });
        this.router.navigate([`/cursos/${this.cdCurso}/disciplinas`]);
      });
    } else {
      this.service.postDisciplina(disciplina).subscribe((res: any) => {
        this.message.add({ severity: 'success', summary: `Disciplina ${res.nmDisciplina} cadastrada com sucesso!` });
        this.router.navigate([`/cursos/${this.cdCurso}/disciplinas`]);
      });
    }
  }
}
