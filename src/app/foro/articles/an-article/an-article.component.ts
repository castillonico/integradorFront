import { Component, OnInit } from '@angular/core';
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
  loadingComments: boolean = false; 
  bodyComment = new FormControl (""); 
  aNewComment: any;

  constructor( private service: ArticlesService, private routes: Router ) { }

  ngOnInit () { 
    this.anArticle = this.service.anArticle; 
  }

  loadComments () { 
    this.loadingComments = true; 
    this.slug = this.anArticle.slug; 
    console.log ("el Slug es: ", this.slug); 
    this.service.getComments().subscribe( (response: any) => {this.listOfComments = response.comments; 
    this.loadingComments = false; 
  }); 
    this.showComments = !this.showComments; 
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
    this.service.postComment(this.bodyComment.value).subscribe( (reponse: any) => {this.aNewComment = reponse; 
        this.showComments = !this.showComments; 
        this.commentFlag = !this.commentFlag; 
        this.loadComments ();
    });   
     
  } 

}
