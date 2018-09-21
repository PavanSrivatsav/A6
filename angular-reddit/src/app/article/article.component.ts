import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass: string;
  // @HostBinding('attr.class') cssClass = 'row'; You can use it in this way also.  

  @Input() article: Article;

  constructor() {
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
