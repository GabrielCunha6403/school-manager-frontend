import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../util/page-header/page-header.component';
import { Button } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputMaskModule } from 'primeng/inputmask';
import { Router, RouterLink } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { User } from '../../../models/user';
import { UsersService } from '../../users.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    PageHeaderComponent,
    Button,
    InputText,
    SelectModule,
    RouterLink,
    FormsModule,
    InputMaskModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy, OnInit {

  private user = inject(User);
  private service = inject(UsersService);
  private router = inject(Router);
  private message = inject(MessageService);
  public userForm = this.user.getUserForm();
  public selectedTypeUser: any;

  public listTypeUser: any = [];
  
  async ngOnInit(): Promise<void> {
    await this.listTpUsers();
  }
  
  ngOnDestroy(): void {
    this.user.userForm.reset();
  }

  async listTpUsers() {
    await this.service.listTpUsers().subscribe((res) => {
      this.listTypeUser = res;
    })
  }

  postUser() {
    const userReq = this.userForm.value;
    this.service.postUser(userReq).subscribe((res: any) => {
      this.message.add({ severity: 'success', summary: `Usuário ${res.nmUser} cadastrado com sucesso!` })
      this.router.navigate(['/users']);
    })
  }

}
