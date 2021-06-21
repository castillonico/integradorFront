import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { AnArticleComponent } from './foro/articles/an-article/an-article.component';
import { ArticlesComponent } from './foro/articles/articles.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component'; 

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registerPage', component: RegisterComponent }, 
  { path: 'loginPage', component: LoginComponent }, 
  { path: 'articles', component: ArticlesComponent }, 
  { path: 'anArticle', component: AnArticleComponent }, 
  { path: '', redirectTo: 'home', pathMatch: 'full'  }
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
