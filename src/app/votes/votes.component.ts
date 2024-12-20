import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { Article } from './article';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-votes',
  standalone: true,
  imports: [ArticleComponent, CommonModule],
  templateUrl: './votes.component.html',
  styleUrl: './votes.component.css',
  inputs: ['article']

})
export class VotesComponent {
  title: string = 'Votes App';
  articles: Article[] | any;
  link: string = '';


  constructor() {
    this.articles = [
      new Article('Angular2', 'http://angular.io', 30),
      new Article('FaztWeb', 'http://faztweb.com', 20),
      new Article('Blog', 'http://angular.com', 0)
    ];
  }

  addArticle(
    title: HTMLInputElement,
    link: HTMLInputElement
  ): boolean {
    this.articles.push(
      new Article(title.value, link.value)
    )
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes)
  }
}
