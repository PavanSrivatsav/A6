import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    articles: Article[] = [];

    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
        this.articles.push(new Article(title.value, link.value));

        // Empty input fields after pushing in array
        title.value = '';
        link.value = '';

        return false;
    }

    sortedArray(): Article[] {
        return this.articles.sort((a: Article, b: Article) => { return a.votes - b.votes });
    };
}
