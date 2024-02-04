import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService{

  constructor() {
    super("users")
  }
}
