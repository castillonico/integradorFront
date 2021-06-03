import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  user: any; 
  userAuth: any; 
  urlBase = 'https://conduit.productionready.io/api/users'; 
  
  constructor( private http: HttpClient ) { } 

  registerUser (email: string, pass: string) {
    return this.http.post<any>( this.urlBase, 
      { user:{ email: email, password: pass 
    }}).subscribe ( (response:any) => this.userAuth = response )
  }

  
}
