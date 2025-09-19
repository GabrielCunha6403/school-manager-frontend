import { Component, inject, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from "primeng/button";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { TableModule } from 'primeng/table';
import { UsersService } from '../users.service';
import { User } from '../types/types';

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
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private service = inject(UsersService);
  public cdUser: string = this.route.snapshot.paramMap.get('cdUser') ?? '';
  public user: User = new User();

  async ngOnInit(): Promise<void> {
    await this.loadUser(parseInt(this.cdUser));
  }

  async loadUser(cdUser: number) {
    await this.service.getUser(cdUser).subscribe(res => {
      this.user = res as User;
    });
  }

  fecharDialog() {
    this.router.navigate(['../../']);
  }
}
