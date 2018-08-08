import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
apiUrl = 'http://sadybamusic.kiev.ua/api/';
  constructor(public http: HttpClient) {
    
  }
  login(data){
  	return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'get_auth_token/', data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });

  };
  check_ticket(data, headers){
    return this.http.post(this.apiUrl+'attendance/', data, headers);
       

  }
}
