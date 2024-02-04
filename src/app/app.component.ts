import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableProduct, TableClient } from './components/index';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TableProduct,
    TableClient
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang';

}
