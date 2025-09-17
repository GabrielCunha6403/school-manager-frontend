import { Component, inject, OnDestroy } from '@angular/core';
import { PageHeaderComponent } from '../../../util/page-header/page-header.component';
import { Button } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputMaskModule } from 'primeng/inputmask';
import { RouterLink } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { User } from '../../../models/user';

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
export class RegisterComponent implements OnDestroy {

  private user = inject(User);
  public userForm = this.user.getUserForm();
  public selectedTypeUser: any;

  listTypeUser = [
    { name: 'ADMINISTRADOR' },
    { name: 'PROFESSOR' },
    { name: 'ALUNO' }
  ];
  
  ngOnDestroy(): void {
    this.user.userForm.reset();
  }

}
