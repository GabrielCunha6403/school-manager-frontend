import { Component, OnInit, ViewChild } from '@angular/core';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { Tooltip } from 'primeng/tooltip';
import { PageHeaderComponent } from '../../util/page-header/page-header.component';
import { RouterLink, ActivatedRoute, RouterOutlet } from "@angular/router";

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
export class CursosComponent {
  @ViewChild('cursoTable') cursoTable!: Table;
  viewModalConfirmDelete = false;

  cursos = [
    { id: 1, nome: "Engenharia de Software", cargaHoraria: 3600 },
    { id: 2, nome: "Ciência da Computação", cargaHoraria: 4000 },
    { id: 3, nome: "Sistemas de Informação", cargaHoraria: 3200 },
    { id: 4, nome: "Engenharia Elétrica", cargaHoraria: 4200 },
    { id: 5, nome: "Administração", cargaHoraria: 3000 },
    { id: 6, nome: "Direito", cargaHoraria: 4500 },
    { id: 7, nome: "Medicina", cargaHoraria: 7200 },
    { id: 8, nome: "Enfermagem", cargaHoraria: 3800 },
    { id: 9, nome: "Arquitetura e Urbanismo", cargaHoraria: 3600 },
    { id: 10, nome: "Psicologia", cargaHoraria: 4000 },
  ];
  
  applyFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    this.cursoTable.filterGlobal(input.value, 'contains');
  }
}
