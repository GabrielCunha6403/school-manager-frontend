import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../util/page-header/page-header.component';
import { Button } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputMaskModule } from 'primeng/inputmask';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';

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
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  listProfessores = [
    { name: 'Carlos Souza' },
    { name: 'Mariana Oliveira' },
    { name: 'Ricardo Mendes' },
    { name: 'Fernanda Lima' },
    { name: 'João Pereira' },
    { name: 'Patrícia Almeida' },
    { name: 'Gustavo Ferreira' },
  ]
}
