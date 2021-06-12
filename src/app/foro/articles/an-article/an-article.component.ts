import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  showComments: boolean = false; 
  listOfComments: any = []; 
  details: boolean = false; 
  commentFlag: boolean = false;
  bodyComment = new FormControl (""); 
  aNewComment: any;

  constructor( private service: ArticlesService, private routes: Router ) { }

  ngOnInit () { 
    this.anArticle = this.service.anArticle; 
  }

  loadComments () {
    this.slug = this.anArticle.slug; 
    console.log ("el Slug es: ", this.slug); 
    this.service.getComments().subscribe( (response: any) => this.listOfComments = response.comments); 
    this.showComments = !this.showComments; 
    console.log("la Lista de comentarios es: ", this.listOfComments); 
  } 
  toggleDetails() { 
    this.details = !this.details; 
  } 
  goBackArticles () { 
    this.routes.navigate(['articles']); 
  } 
  letComment () { 
    this.commentFlag = !this.commentFlag; 
  }
  commentArticle () { 
    console.log ("El comentario sería...:", this.bodyComment.value ); 
    this.aNewComment = this.service.postComment(this.bodyComment.value);  
  } 

}
