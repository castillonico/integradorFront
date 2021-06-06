import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-an-article',
  templateUrl: './an-article.component.html',
  styleUrls: ['./an-article.component.css']
})
export class AnArticleComponent implements OnInit { 

  anArticle: any; 
  slug: any; 
  listOfComments: any; 
  details: boolean = false; 

  constructor( private service: ArticlesService, private routes: Router ) { }

  ngOnInit () { 
    this.anArticle = this.service.anArticle; 
   }

  loadComments () {
    this.slug = this.anArticle.slug; 
    this.listOfComments = this.service.getComments(this.slug); 
    console.log(this.listOfComments); 
  }
  toggleDetails() {
    this.details = !this.details; 
  }
  goBackArticles () {
    this.routes.navigate(['articles']); 
  }

}
