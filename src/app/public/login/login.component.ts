import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any; 
  userLogged: any; 
  formLogin = new FormGroup({ 
    email: new FormControl("fullstackpoloutn@poloutn.edu", [Validators.required]), 
    pass: new FormControl("fullstackpoloutn", [Validators.required])
  }); 
  
  constructor( private service: LoginService ) { }

  ngOnInit(): void { }

  loadLogin() { 
    console.log ("El mail es: ", this.formLogin.value.email); 
    this.user = {
      user:{
        email: this.formLogin.value.email,
        password: this.formLogin.value.pass
      }
    }; 
    this.service.getLogin(this.user).subscribe( (response: any) => {
      this.userLogged = response.user; 
      console.log (response); 
      console.log ("el Token es: ", this.userLogged.token); 
      this.service.saveToken(this.userLogged.token); 
    }); 
  } 

  actualUser () {
    console.log ("El usuario es: ", this.userLogged); 
  }

}
