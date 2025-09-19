import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../util/page-header/page-header.component';
import { Button } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputMaskModule } from 'primeng/inputmask';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { User as UserModel } from '../../../models/user';
import { UsersService } from '../users.service';
import { MessageService } from 'primeng/api';
import { TpUser, User } from '../types/types';

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

  private userModel = inject(UserModel);
  private service = inject(UsersService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private message = inject(MessageService);
  public isEdit = this.route.snapshot.paramMap.get('cdUser') != null;
  public cdUser = this.route.snapshot.paramMap.get('cdUser');
  public userForm = this.userModel.getUserForm();
  public selectedTypeUser: TpUser = new TpUser();

  public listTypeUser: TpUser[] = [];
  
  async ngOnInit(): Promise<void> {
    await this.listTpUsers();
    if(this.isEdit) await this.loadUser(parseInt(this.cdUser!));
  }
  
  ngOnDestroy(): void {
    this.userModel.userForm.reset();
  }
  
  async loadUser(cdUser: number) {
    await this.service.getUser(cdUser).subscribe(res => {
      this.userModel.setValuesFromUser(res as User);
    });
  }

  async listTpUsers() {
    await this.service.listTpUsers().subscribe((res) => {
      this.listTypeUser = res as TpUser[];
    })
  }

  async saveUser() {
    const userReq = this.userForm.value;
    if(this.isEdit) {
      await this.service.editUser(userReq).subscribe((res: any) => {
        this.message.add({ severity: 'success', summary: `Usuário ${res.nmUser} alterado com sucesso!` })
        this.router.navigate(['/users']);
      });
    } else {
      await this.service.postUser(userReq).subscribe((res: any) => {
        this.message.add({ severity: 'success', summary: `Usuário ${res.nmUser} cadastrado com sucesso!` })
        this.router.navigate(['/users']);
      });
    }
  }

}
