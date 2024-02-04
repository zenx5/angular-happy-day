import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService {

  constructor(){
    super("posts")
  }

}
