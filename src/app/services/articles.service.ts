import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  urlBase = 'https://conduit.productionready.io/api/articles'; 
  ruta: string | undefined; 
  slug: any; 
  articles: any = []; 
  anArticle:  any; 
  listComments: any; 
  header = new HttpHeaders; 
  token: string = ''; 
  commentRealise: any; 

  constructor( private http: HttpClient, private userService: LoginService) { }; 

  getArticles () {
    console.log ('Vamos a recuperar los últimos 10 temas del foro '); 
    return this.http.get<any>(this.urlBase + '?limit=10'); 
  }; 
  getArticlesByTag (tagFilter: string) { 
    console.log ("Vamos a filtrar los primeros 100 artículos con el tag: ", tagFilter); 
    return this.http.get<any>(this.urlBase + '?limit=100&?tag=' + tagFilter); 
  }; 
  getArticlesByAuthor (authorFilter: string) { 
    console.log ("Vamos a obtener los primeros cien artículos pertenecientes al autor: ", authorFilter); 
    this.articles = this.http.get<any>( this.urlBase + '?limit=100&?author=' + authorFilter); 
    return this.articles;
  }; 
  getAnArticle (index: number) {
    this.anArticle = this.articles[index]; 
    this.slug = this.anArticle.slug; 
    console.log ("el index es: ", index); 
    console.log (this.articles[index]); 
  } 
  getComments () { 
    let urlComments = this.urlBase + "/" + this.slug + "/comments"; 
    this.listComments = this.http.get<any>(urlComments); 
    return this.listComments; 
  } 

  postComment (comment: any) { 
    let urlComment = this.urlBase + "/" + this.slug + '/comments'; 
    let newComment = {
      comment: {
        body : comment
      }
    }; 
    this.token = this.userService.getToken(); 
    this.header = this.header.set('Authorization', 'Token ' + this.token); 
    console.log("la url construida es: ", urlComment); 
    console.log("el nuevo header es: ", this.header); 
    console.log("el comentario realizado es: ", newComment), 
    this.http.post( urlComment, newComment, {headers: this.header}).subscribe( reponse => this.commentRealise = reponse ); 
    return this.commentRealise 
  } 
} 
