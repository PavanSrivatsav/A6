import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    articles: Article[];

    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`title: ${title.value} , link ${link.value}`);
    }

    constructor() {
        this.articles = [
            new Article('Google', 'https://www.google.com', 10),
            new Article('Gmail', 'https://www.gmail.com', 5)
        ]

    }

}
