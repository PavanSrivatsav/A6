import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass: string;
  // @HostBinding('attr.class') cssClass = 'row'; You can use it in this way also.  

  article: Article;

  constructor() {
    this.article = new Article('Google', 'https://www.google.com');

    this.cssClass = 'row';
  }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

}
