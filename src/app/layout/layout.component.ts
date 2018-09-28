import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  title = 'hello conduit';
  subtitle = 'A place to share your <u>knowledge</u>.';

  articles;

  isLoading = false;
  // get articles() {
  //   return this.articlesService.articles;
  // }

  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit() {
    this.searchArticle('');
  }

  search(keyword) {
    this.searchArticle(keyword);
  }

  searchArticle(keyword) {
    this.isLoading = true;
    const obj = {
      next: data => {
        this.articles = data;
        this.isLoading = false;
      },
      error: _ => {
        console.log(_);
        this.isLoading = false;
      },
      complete: () => {
        console.log('complete');
      }
    };
    this.articlesService.getArticles(keyword).subscribe(obj);
  }
}
