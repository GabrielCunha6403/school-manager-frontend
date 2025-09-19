import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../util/page-header/page-header.component';
import { Button } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputMaskModule } from 'primeng/inputmask';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';
import { Curso } from '../../../models/curso';
import { Curso as CursoType } from '../types/types';
import { CursosService } from '../cursos.service';
import { User } from '../../users/types/types';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    PageHeaderComponent,
    ReactiveFormsModule,
    Button,
    InputText,
    InputNumber,
    SelectModule,
    RouterLink,
    FormsModule,
    InputMaskModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy, OnInit {
  private curso = inject(Curso);
  private service = inject(CursosService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private message = inject(MessageService);

  public cdCurso = this.route.snapshot.paramMap.get("cdCurso");
  public isEdit = this.cdCurso != null;
  public cursoForm: FormGroup = this.curso.getCursoForm();
  public listCoordenadores: User[] = [];
  public selectedCoordenador: User | null = null; 

  ngOnInit(): void {
    this.listarCoordenadores();
      if(this.isEdit) {
        this.loadCurso();
      }
  }

  listarCoordenadores() {
    this.service.listCoordenadores().subscribe(res => {
      this.listCoordenadores = res as User[];
    })
  }

  loadCurso() {
    this.service.getCurso(parseInt(this.cdCurso!)).subscribe(res => {
      const cursoData = res as CursoType;
      cursoData.coordenador = this.listCoordenadores.find(c => c.cdUser == cursoData.coordenador?.cdUser)!;
      this.curso.setValuesFromCurso(cursoData);
    });
  }

  saveCurso() {
    const curso = this.cursoForm.value;
    if(this.isEdit) {
      this.service.editCurso(curso).subscribe((res: any) => {
        this.message.add({ severity: 'success', summary: `Curso ${res.nmCurso} atualizado com sucesso!` });
        this.router.navigate([`/cursos`]);
      })
    } else {
      this.service.postCurso(curso).subscribe((res: any) => {
        this.message.add({ severity: 'success', summary: `Curso ${res.nmCurso} cadastrado com sucesso!` });
        this.router.navigate([`/cursos`]);
      })
    }
  }
  
  ngOnDestroy(): void {
    this.curso.cursoForm.reset();
  }
  
}
