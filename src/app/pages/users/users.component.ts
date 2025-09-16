import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { PageHeaderComponent } from '../../util/page-header/page-header.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    Button, 
    PageHeaderComponent,
    InputTextModule,
    TableModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  listUsers = [
    { id: 1, name: 'John Doe', tpUser: 'ADMINISTRADOR'},
    { id: 2, name: 'Jane Smith', tpUser: 'PROFESSOR'},
    { id: 3, name: 'Alice Johnson', tpUser: 'PROFESSOR'},
    { id: 4, name: 'Bob Brown', tpUser: 'PROFESSOR'},
    { id: 5, name: 'Charlie Davis', tpUser: 'ALUNO'},
    { id: 6, name: 'Eve Wilson', tpUser: 'ALUNO'},
    { id: 7, name: 'Frank Miller', tpUser: 'ALUNO'},
    { id: 8, name: 'Grace Lee', tpUser: 'ALUNO'},
    { id: 9, name: 'Hank Taylor', tpUser: 'ALUNO'},
    { id: 10, name: 'Ivy Anderson', tpUser: 'ALUNO'},
  ];
}
