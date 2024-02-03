import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


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

}
