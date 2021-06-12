import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userAuth: any; 
  regForm = new FormGroup ({ 
    newUser: new FormControl(), 
    newMail: new FormControl(),  
    newPass: new FormControl() 
  })

  constructor( private service: RegisterService ) { }

  ngOnInit(): void {
  }

  createUser () {
    this.service.registerUser( 
      this.regForm.value.newUser, 
      this.regForm.value.newMail, 
      this.regForm.value.newPass 
    ).subscribe ( (response:any) => {
      this.userAuth = response; 
      console.log("El usuario se está creando... "); 
      console.log("El usuario es: ", this.userAuth);
    }); 
  }; 
}
