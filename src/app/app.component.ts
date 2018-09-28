import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello conduit';
  subtitle = 'A place to share your <u>knowledge</u>.';

  articles;
  // get articles() {
  //   return this.articlesService.articles;
  // }

  constructor(public articlesService: ArticlesService) {
  }

  ngOnInit() {
    this.articlesService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

  search(keyword) {
    this.articlesService.search(keyword);
  }
}
