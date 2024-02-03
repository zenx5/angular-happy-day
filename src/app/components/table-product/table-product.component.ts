import { Component } from '@angular/core';
import { TableGeneralComponent } from '../table-general/table-general.component';
import { ProductService } from '../../product.service';

@Component({
  selector: 'table-product',
  standalone: true,
  imports: [
    TableGeneralComponent
  ],
  templateUrl: './table-product.component.html',
  styleUrl: './table-product.component.css'
})
export class TableProductComponent {
  headers = [
    { key:'id', label:'ID' },
    { key:'title', label:'Title' },
    { key:'body', label:'Description' }
  ]

  items:any[] = []

  constructor( public products:ProductService ) {
    products.get().then( data => {
      this.items = data
    } )
  }
}
