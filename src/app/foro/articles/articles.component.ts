import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{

  articles: any = []; 
  constructor( private serviceArticles: ArticlesService, private routes: Router ) { } 

  ngOnInit () {
    this.loadArticles(); 
  }

  loadArticles () {
    console.log ("Desde el componente articles pedimos la carga de los artículos... "); 
    this.serviceArticles.getArticles().subscribe 
      (response => 
        {this.articles = response.articles; 
        this.serviceArticles.articles = this.articles; 
      }); 
  } 
  loadAnArticle ( i: any ) { 
    this.routes.navigate(['anArticle']); 
    this.serviceArticles.getAnArticle(i);  
  } 
} 
