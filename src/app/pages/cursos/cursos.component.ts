import { Component, OnInit } from '@angular/core';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { Tooltip } from 'primeng/tooltip';
import { PageHeaderComponent } from '../../util/page-header/page-header.component';
import { RouterLink, ActivatedRoute } from "@angular/router";

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
    RouterLink
],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
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
}
