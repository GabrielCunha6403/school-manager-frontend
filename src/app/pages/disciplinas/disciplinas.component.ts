import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { Tooltip } from 'primeng/tooltip';
import { PageHeaderComponent } from '../../util/page-header/page-header.component';
import { ActivatedRoute, RouterLink, RouterOutlet } from "@angular/router";
import { Disciplina } from './types/types';
import { DisciplinasService } from './disciplinas.service';
import { MessageService } from 'primeng/api';

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
export class DisciplinasComponent implements OnInit {
  @ViewChild('disciplinaTable') disciplinaTable!: Table;
  private service = inject(DisciplinasService);
  private message = inject(MessageService);
  private route = inject(ActivatedRoute);

  public cdCurso = this.route.snapshot.paramMap.get('cdCurso');
  public viewModalConfirmDelete = false;
  public disciplinaToBeDeleted: Disciplina | null = null;
  
  listDisciplinas = [
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

  ngOnInit(): void {
    this.listarDisciplinas();
  }

  listarDisciplinas() {
    this.service.listDisciplinas(parseInt(this.cdCurso!)).subscribe((res: any) => {
      this.listDisciplinas = res;
    })
  }
  
  applyFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    this.disciplinaTable.filterGlobal(input.value, 'contains');
  }

  confirmDeletion(disciplina: Disciplina) {
    this.disciplinaToBeDeleted = disciplina;
    this.viewModalConfirmDelete = true;
  }

  deleteDisciplina() {
    this.service.deleteDisciplina(this.disciplinaToBeDeleted?.cdDisciplina!).subscribe(res => {
      this.message.add({ severity: 'success', summary: `Disciplina ${this.disciplinaToBeDeleted?.nmDisciplina} deletada com sucesso!` });
      this.disciplinaToBeDeleted = null;
      this.viewModalConfirmDelete = false;
      this.listarDisciplinas();
    });
  }
}
