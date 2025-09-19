import { Component, inject, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from "primeng/button";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { TableModule } from 'primeng/table';
import { DisciplinasService } from '../disciplinas.service';
import { Disciplina } from '../types/types';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    TableModule,
    RouterLink
],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private service = inject(DisciplinasService);

  cdDisciplina = this.route.snapshot.paramMap.get('cdDisciplina');
  disciplina: Disciplina = new Disciplina();

  listProfessores = [
    { cdProfessor: 1, nmProfessor: 'João Silva', dsFormacao: 'Mestre em Matemática', dsEspecialidade: 'Álgebra' },
    { cdProfessor: 2, nmProfessor: 'Maria Oliveira', dsFormacao: 'Doutora em Física', dsEspecialidade: 'Mecânica' },
  ];

  async ngOnInit(): Promise<void> {
    await this.getDisciplina();
  }

  async getDisciplina() {
    this.service.getDisciplina(parseInt(this.cdDisciplina!)).subscribe((res: any) => {
      this.disciplina = res as Disciplina;
    });
  }

  fecharDialog() {
    this.router.navigate(['../../']);
  }
}
