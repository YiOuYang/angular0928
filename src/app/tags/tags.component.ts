import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: string[];
  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.articlesService.getTags().subscribe((tags: string[]) => {
      this.tags = tags;
    });
  }
}
