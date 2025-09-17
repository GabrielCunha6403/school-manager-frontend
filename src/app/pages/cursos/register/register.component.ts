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
  listCoordenadores = [
    { name: 'João Silva', code: '1' },
    { name: 'Maria Souza', code: '2' },
    { name: 'Carlos Oliveira', code: '3' },
    { name: 'Ana Pereira', code: '4' },
    { name: 'Pedro Santos', code: '5' },
    { name: 'Mariana Costa', code: '6' },
    { name: 'Lucas Almeida', code: '7' },
    { name: 'Beatriz Fernandes', code: '8' },
    { name: 'Rafael Gomes', code: '9' },
    { name: 'Juliana Ribeiro', code: '10' }
  ];
}
