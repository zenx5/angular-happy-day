import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuVertical } from '../components';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MenuVertical
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  navigation = [
    { label:'Admin', path:'/admin' },
    { label:'Clientes', path:'/admin/clients' },
  ]

}
