import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; 

import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{

  articles: any = []; 
  loadingArticles = true; 
  selectedValue: string = ""; 
  optionSearch = ["Etiqueta", "Autor"]; 
  busqueda = new FormGroup ({ 
    opcion: new FormControl(), 
    criterio: new FormControl()
  }); 
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
        this.loadingArticles = false; 
      }); 
  } 
  loadAnArticle ( i: any ) { 
    this.routes.navigate(['anArticle']); 
    this.serviceArticles.getAnArticle(i);  
  } 

  search () { 
    this.loadingArticles = true; 
    if ( this.selectedValue === "Autor" ) { 
      console.log ( "La opcion es: ", this.selectedValue ); 
      console.log ( "La palabra de busqueda es: ", this.busqueda.value.criterio ); 
      this.serviceArticles.getArticlesByAuthor(this.busqueda.value.criterio).subscribe 
      ((response: { articles: any; }) => 
        {this.articles = response.articles; 
        this.serviceArticles.articles = this.articles; 
        this.loadingArticles = false; 
      });
    } else { 
      console.log ( "La opcion es: ", this.selectedValue ); 
      console.log ( "La palabra de busqueda es: ", this.busqueda.value.criterio ); 
      this.serviceArticles.getArticlesByTag(this.busqueda.value.criterio).subscribe 
      ((response: { articles: any; }) => 
        {this.articles = response.articles; 
        this.serviceArticles.articles = this.articles; 
        this.loadingArticles = false;                
      });
    } 
  } 
} 
