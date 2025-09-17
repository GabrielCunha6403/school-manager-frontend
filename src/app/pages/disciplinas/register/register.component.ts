import { Component, inject, OnDestroy } from '@angular/core';
import { PageHeaderComponent } from '../../../util/page-header/page-header.component';
import { Button } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputMaskModule } from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/multiselect';
import { RouterLink } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';
import { Disciplina } from '../../../models/disciplina';

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
export class RegisterComponent implements OnDestroy {
  private disciplina = inject(Disciplina);
  disciplinaForm = this.disciplina.getDisciplinaForm();
  listProfessores = [
    { name: 'Carlos Souza' },
    { name: 'Mariana Oliveira' },
    { name: 'Ricardo Mendes' },
    { name: 'Fernanda Lima' },
    { name: 'João Pereira' },
    { name: 'Patrícia Almeida' },
    { name: 'Gustavo Ferreira' },
  ]
  
  ngOnDestroy(): void {
    this.disciplina.disciplinaForm.reset();
  }
}
