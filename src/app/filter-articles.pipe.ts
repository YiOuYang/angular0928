import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArticles'
})
export class FilterArticlesPipe implements PipeTransform {

  transform(value: any[], keyword: string): any[] {
    if(value) {
      return value.filter(article => article.title.indexOf(keyword) !== -1);
    }
  }

}
