import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  user: any; 
  urlBase = 'https://conduit.productionready.io/api/users'; 
  
  constructor( private http: HttpClient ) { } 

  registerUser (user: string, email: string, pass: string) {
    return this.http.post<any>(this.urlBase, 
          { user:{ username: user, email: email, password: pass }}
    )
  }

  
}
