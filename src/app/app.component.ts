import { Component } from '@angular/core';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello conduit';
  subtitle = 'A place to share your <u>knowledge</u>.';

  get articles() {
    return this.articlesService.articles;
  }

  constructor(public articlesService: ArticlesService) {
  }

  search(keyword) {
    this.articlesService.search(keyword);
  }
}
