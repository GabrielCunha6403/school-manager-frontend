import { Component, inject, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from "primeng/button";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { TableModule } from 'primeng/table';
import { Curso } from '../types/types';
import { User } from '../../users/types/types';
import { CursosService } from '../cursos.service';

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
  private service = inject(CursosService);

  public cdCurso = this.route.snapshot.paramMap.get("cdCurso");
  public curso: Curso | null = null;

  listProfessores: User[] = [];
  ngOnInit(): void {
    this.getCurso();
    this.listarProfessores();
  }

  getCurso() {
    this.service.getCurso(parseInt(this.cdCurso!)).subscribe(res => {
      this.curso = res as Curso;
    });
  }

  listarProfessores() {
    this.service.listProfessoresFromCurso(parseInt(this.cdCurso!)).subscribe(res => {
      this.listProfessores = res as User[];
    });
  }

  fecharDialog() {
    this.router.navigate(['../../']);
  }
}
