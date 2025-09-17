import { Component, ViewChild } from '@angular/core';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { Tooltip } from 'primeng/tooltip';
import { PageHeaderComponent } from '../../util/page-header/page-header.component';
import { ActivatedRoute, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [
    Button,
    PageHeaderComponent,
    InputTextModule,
    TableModule,
    DialogModule,
    Tooltip,
    RouterLink,
    RouterOutlet
],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss'
})
export class DisciplinasComponent {
  @ViewChild('disciplinaTable') disciplinaTable!: Table;
  cdCurso: string | null = null;
  viewModalConfirmDelete = false;
  
  disciplinasComputacao = [
    { id: 1, nome: "Algoritmos e Estruturas de Dados", professor: "Carlos Souza", semestre: 1 },
    { id: 2, nome: "Programação Orientada a Objetos", professor: "Mariana Oliveira", semestre: 2 },
    { id: 3, nome: "Banco de Dados", professor: "Ricardo Mendes", semestre: 3 },
    { id: 4, nome: "Redes de Computadores", professor: "Fernanda Lima", semestre: 4 },
    { id: 5, nome: "Sistemas Operacionais", professor: "João Pereira", semestre: 4 },
    { id: 6, nome: "Engenharia de Software", professor: "Patrícia Almeida", semestre: 5 },
    { id: 7, nome: "Inteligência Artificial", professor: "Gustavo Ferreira", semestre: 6 },
    { id: 8, nome: "Computação Gráfica", professor: "Luciana Martins", semestre: 6 },
    { id: 9, nome: "Segurança da Informação", professor: "André Santos", semestre: 7 },
    { id: 10, nome: "Compiladores", professor: "Roberta Nunes", semestre: 8 }
  ];
  
  constructor(private route: ActivatedRoute) {
    this.cdCurso = this.route.snapshot.paramMap.get('cdCurso');
  }
  
  applyFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    this.disciplinaTable.filterGlobal(input.value, 'contains');
  }
}
