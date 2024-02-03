import { Inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private items!:any[];

  constructor(@Inject(String) private resource:string) {
    this.items = []
  }

  public async get(id:string=""):Promise<any[]> {
    const response = await fetch(`${environment.apiUrl}/${this.resource}`)
    this.items = await response.json()
    return this.items
  }

  public async post( id:string ){

  }

  public async put( id:string ){

  }

  public async delete(id:string){

  }
}
