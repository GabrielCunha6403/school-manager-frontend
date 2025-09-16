import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../util/page-header/page-header.component";
import { Button } from "primeng/button";
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { RouterLink } from "@angular/router";
import { Tooltip } from "primeng/tooltip";

@Component({
  selector: 'app-matriz-curricular',
  standalone: true,
  imports: [
    PageHeaderComponent,
    Button,
    RouterLink,
    TableModule,
    PanelModule,
    TooltipModule,
    Tooltip
],
  templateUrl: './matriz-curricular.component.html',
  styleUrl: './matriz-curricular.component.scss'
})
export class MatrizCurricularComponent {
  isEditEnabled = false;

  listSemestres = [
    {
      semestre: 1,
      disciplinas: [
        { cdDisciplina: 1, nmDisciplina: "Algoritmos e Estruturas de Dados" },
        { cdDisciplina: 2, nmDisciplina: "Cálculo I" },
        { cdDisciplina: 3, nmDisciplina: "Introdução à Computação" },
        { cdDisciplina: 4, nmDisciplina: "Algoritmos e Estruturas de Dados" },
        { cdDisciplina: 5, nmDisciplina: "Cálculo I" },
        { cdDisciplina: 6, nmDisciplina: "Introdução à Computação" }
      ]
    },
    {
      semestre: 2,
      disciplinas: [
        { cdDisciplina: 7, nmDisciplina: "Programação Orientada a Objetos" },
        { cdDisciplina: 8, nmDisciplina: "Cálculo II" },
        { cdDisciplina: 9, nmDisciplina: "Álgebra Linear" },
        { cdDisciplina: 10, nmDisciplina: "Programação Orientada a Objetos" },
        { cdDisciplina: 11, nmDisciplina: "Cálculo II" },
        { cdDisciplina: 12, nmDisciplina: "Álgebra Linear" }
      ]
    },
    {
      semestre: 3,
      disciplinas: [
        { cdDisciplina: 13, nmDisciplina: "Banco de Dados" },
        { cdDisciplina: 14, nmDisciplina: "Probabilidade e Estatística" },
        { cdDisciplina: 15, nmDisciplina: "Estruturas de Dados Avançadas" },
        { cdDisciplina: 16, nmDisciplina: "Banco de Dados" },
        { cdDisciplina: 17, nmDisciplina: "Probabilidade e Estatística" },
        { cdDisciplina: 18, nmDisciplina: "Estruturas de Dados Avançadas" }
      ]
    },
    {
      semestre: 4,
      disciplinas: [
        { cdDisciplina: 19, nmDisciplina: "Redes de Computadores" },
        { cdDisciplina: 20, nmDisciplina: "Sistemas Operacionais" },
        { cdDisciplina: 21, nmDisciplina: "Cálculo III" },
        { cdDisciplina: 22, nmDisciplina: "Redes de Computadores" },
        { cdDisciplina: 23, nmDisciplina: "Sistemas Operacionais" },
        { cdDisciplina: 24, nmDisciplina: "Cálculo III" }
      ]
    },
    {
      semestre: 5,
      disciplinas: [
        { cdDisciplina: 25, nmDisciplina: "Engenharia de Software" },
        { cdDisciplina: 26, nmDisciplina: "Compiladores" },
        { cdDisciplina: 27, nmDisciplina: "Inteligência Artificial" },
        { cdDisciplina: 28, nmDisciplina: "Engenharia de Software" },
        { cdDisciplina: 29, nmDisciplina: "Compiladores" },
        { cdDisciplina: 30, nmDisciplina: "Inteligência Artificial" }
      ]
    },
    // {
    //   semestre: 6,
    //   disciplinas: [
    //     { cdDisciplina: 31, nmDisciplina: "Computação Gráfica" },
    //     { cdDisciplina: 32, nmDisciplina: "Segurança da Informação" },
    //     { cdDisciplina: 33, nmDisciplina: "Sistemas Distribuídos" },
    //     { cdDisciplina: 34, nmDisciplina: "Computação Gráfica" },
    //     { cdDisciplina: 35, nmDisciplina: "Segurança da Informação" },
    //     { cdDisciplina: 36, nmDisciplina: "Sistemas Distribuídos" }
    //   ]
    // }
  ];

  changeEditState() {
    this.isEditEnabled = !this.isEditEnabled;
  }

  deleteDisciplina(semestreIndex: number, cdDisciplina: number) {
    this.listSemestres[semestreIndex].disciplinas = this.listSemestres[semestreIndex].disciplinas.filter(d => d.cdDisciplina !== cdDisciplina);
  }

  deleteSemestre(semestreIndex: number) {
    this.listSemestres = this.listSemestres.filter((_, index) => index !== semestreIndex);
  }

}
