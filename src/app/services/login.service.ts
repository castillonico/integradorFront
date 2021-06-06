import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlBase = 'https://conduit.productionready.io/api/users/login'; 
  userLogged: any; 

  constructor( private http: HttpClient) { }; 

  getLogin ( user:any ) { 
    this.userLogged = this.http.post(this.urlBase, user); 
    return this.userLogged
  } 

}
