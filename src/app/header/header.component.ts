import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count = 0;
  keyword = 'test';
  isHighlight = false;
  fontSize = 24;

  constructor() { }

  ngOnInit() {
  }

  buttonClick(clickEvent) {
    ++this.count;
    this.keyword = '';
    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;
    console.log(clickEvent);
  }

  keywordInpu(event) {
    console.log(event);
    this.keyword = event;
  }

}
