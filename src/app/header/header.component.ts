import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count = 0;
  keyword = 'test';

  constructor() { }

  ngOnInit() {
  }

  buttonClick(clickEvent) {
    ++this.count;
    this.keyword = '';
    console.log(clickEvent);
  }

  keywordInpu(event) {
    console.log(event);
    this.keyword = event;
  }

}
