import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { PageHeaderComponent } from '../../util/page-header/page-header.component';
import { RouterLink, RouterOutlet } from "@angular/router";
import { Tooltip } from 'primeng/tooltip';
import { UsersService } from '../users.service';
import { User } from './types/types';

@Component({
  selector: 'app-users',
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
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  @ViewChild('userTable') userTable!: Table;

  private service = inject(UsersService);
  public listUsers: User[] = [];
  public viewModalConfirmDelete = false;

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.service.listUsers().subscribe((users) => {
      this.listUsers = users as User[];
    });
  }
      

  applyFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    this.userTable.filterGlobal(input.value, 'contains');
  }
}
