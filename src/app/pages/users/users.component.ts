import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { PageHeaderComponent } from '../../util/page-header/page-header.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [Button, PageHeaderComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
