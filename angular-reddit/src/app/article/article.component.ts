import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass:string;
  // @HostBinding('attr.class') cssClass = 'row'; You can use it in above way also.  

  link: string;
  votes: number;
  title: string;

  constructor() {
    this.link = 'https://www.google.com';
    this.title = 'Google';
    this.votes = 1;
    this.cssClass='row';
  }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.votes += 1;
    return false;
  }

  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }

}
