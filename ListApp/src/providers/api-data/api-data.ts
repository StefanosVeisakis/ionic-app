import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the ApiDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiDataProvider Provider');
  }

  getRemoteData(){

    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(data =>{
        console.log(data);
    });

  }

}
