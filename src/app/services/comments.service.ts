import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  urlBase = 'https://conduit.productionready.io/api/articles/'; 

  constructor( private http: HttpClient ) { } 


  getComments (idArticle: string) { 
    console.log ("Vamos a obtener los artículos del artículo... "); 
    this.http.get<any>( this.urlBase + idArticle + "/comments" );  
  } 
  
  postComment ( commentToPost: string ) {
    console.log ("vamos a intentar postear un comentario en el artículo... "); 
    this.http.post(this.urlBase, 
      {
        comment: {
          body: commentToPost
        }
      } 
    )
  }
}
