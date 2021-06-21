import { Component, OnInit } from '@angular/core'; 
import { ArticlesService } from 'src/app/services/articles.service';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  token: any; 

  constructor( private service: LoginService, private serviceArticles: ArticlesService ) { }

  ngOnInit(): void {
  } 

  irAlForo () { 
    this.serviceArticles.getArticles(); 
  }
  obtenerToken () {
    this.token = this.service.getToken(); 
    console.log("el token actual es: ", this.token); 
  }

}
