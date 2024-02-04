import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TableGeneralComponent } from '../table-general/table-general.component';

@Component({
  selector: 'table-client',
  standalone: true,
  imports: [
    TableGeneralComponent
  ],
  templateUrl: './table-client.component.html',
  styleUrl: './table-client.component.css'
})
export class TableClientComponent {
  headers = [
    { key:'id', label:'ID' },
    { key:'name', label:'Name' },
    { key:'username', label:'Nick' },
    { key:'phone', label:'Phone' },
    { key:'website', label:'Site' }
  ]

  items:any[] = []

  constructor( public clients:UserService ) {
    clients.get().then( data => {
      this.items = data
    } )
  }

  handlerEdit(id:number|string) {
    console.log(id)

  }

}
