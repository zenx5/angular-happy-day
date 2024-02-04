import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'table-general',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './table-general.component.html',
  styleUrl: './table-general.component.css'
})
export class TableGeneralComponent {
  @Input() headers:Array<any> = []
  @Input() items:Array<any> = []
  @Input() isEditable:boolean = false
  @Input() isDeletable:boolean = false

  @Output() onDelete = new EventEmitter<number|string>()
  @Output() onEdit = new EventEmitter<number|string>()

  handlerDelete(id:number|string) {
    this.onDelete.emit(id)
  }

  handlerEdit(id:number|string) {
    this.onEdit.emit(id)
  }
}
