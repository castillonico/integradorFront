import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

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

  constructor( private http: HttpClient) { }; 

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
    console.log ("el index es: ", index); 
    console.log (this.articles[index]); 
  } 
  getComments (slug: any) { 
    console.log ("vamos a obtener la lista de comentarios de l artículo... "); 
    return this.http.get<any>( this.urlBase + "/" + slug ); 
  }
  
}
