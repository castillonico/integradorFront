import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private serviceArticles: ArticlesService ) { }

  ngOnInit(): void {
  }

  irAlForo () { 
    this.serviceArticles.getArticles(); 
  }
}
