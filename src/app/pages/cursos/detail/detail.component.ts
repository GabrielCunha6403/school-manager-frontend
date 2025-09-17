import { Component, inject } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from "primeng/button";
import { Router, RouterLink } from "@angular/router";
import { TableModule } from 'primeng/table';

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
export class DetailComponent {
  router = inject(Router);

  listProfessores = [
    { cdProfessor: 1, nmProfessor: 'João Silva', dsFormacao: 'Mestre em Matemática', dsEspecialidade: 'Álgebra' },
    { cdProfessor: 2, nmProfessor: 'Maria Oliveira', dsFormacao: 'Doutora em Física', dsEspecialidade: 'Mecânica' },
  ];

  fecharDialog() {
    console.log("assererre");
    
    this.router.navigate(['../../']); // mesmo comportamento do onHide
  }
}
