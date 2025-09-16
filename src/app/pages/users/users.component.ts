import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { PageHeaderComponent } from '../../util/page-header/page-header.component';
import { RouterLink } from "@angular/router";
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    Button,
    PageHeaderComponent,
    InputTextModule,
    TableModule,
    DialogModule,
    Tooltip,
    RouterLink
],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  listUsers = [
    { id: 1, name: 'John Doe', tpUser: 'ADMINISTRADOR', cpf: '123.456.789-00' },
    { id: 2, name: 'Jane Smith', tpUser: 'PROFESSOR', cpf: '234.567.890-11' },
    { id: 3, name: 'Alice Johnson', tpUser: 'PROFESSOR', cpf: '345.678.901-22' },
    { id: 4, name: 'Bob Brown', tpUser: 'PROFESSOR', cpf: '456.789.012-33' },
    { id: 5, name: 'Charlie Davis', tpUser: 'ALUNO', cpf: '567.890.123-44' },
    { id: 6, name: 'Eve Wilson', tpUser: 'ALUNO', cpf: '678.901.234-55' },
    { id: 7, name: 'Frank Miller', tpUser: 'ALUNO', cpf: '789.012.345-66' },
    { id: 8, name: 'Grace Lee', tpUser: 'ALUNO', cpf: '890.123.456-77' },
    { id: 9, name: 'Hank Taylor', tpUser: 'ALUNO', cpf: '901.234.567-88' },
    { id: 10, name: 'Ivy Anderson', tpUser: 'ALUNO', cpf: '012.345.678-99' }
  ];
  viewModalConfirmDelete = false;
}
