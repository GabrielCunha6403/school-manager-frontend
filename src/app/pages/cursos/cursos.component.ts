import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { Tooltip } from 'primeng/tooltip';
import { PageHeaderComponent } from '../../util/page-header/page-header.component';
import { RouterLink, ActivatedRoute, RouterOutlet } from "@angular/router";
import { CursosService } from './cursos.service';
import { Curso } from './types/types';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cursos',
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
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {
  @ViewChild('cursoTable') cursoTable!: Table;
  
  private service = inject(CursosService);
  private message = inject(MessageService);

  public viewModalConfirmDelete = false;
  public cursoToBeDeleted: Curso | null = null;
  public cursos = [];

  ngOnInit(): void {
    this.listarCursos();
  }

  listarCursos() {
    this.service.listCursos().subscribe((res: any) => {
      this.cursos = res;
    });
  }
  
  applyFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cursoTable.filterGlobal(input.value, 'contains');
  }

  confirmCursoDeletion(curso: Curso) {
    this.cursoToBeDeleted = curso;
    this.viewModalConfirmDelete = true;
  }

  deleteCurso() {
    this.service.deleteCurso(this.cursoToBeDeleted?.cdCurso!).subscribe(res => {
      this.message.add({ severity: 'success', summary: `Curso ${this.cursoToBeDeleted?.nmCurso} deletado com sucesso!` });
      this.cursoToBeDeleted = null;
      this.viewModalConfirmDelete = false;
      this.listarCursos();
    });
  }
}
