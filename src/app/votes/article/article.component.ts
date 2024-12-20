import { Component } from "@angular/core";
import { Article } from "../article";
import { CommonModule } from "@angular/common";


@Component({
    selector: 'article-app',
    standalone: true,
    host: {
        class: 'row'
    },
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css'],
    inputs: ['article'],
    imports: [CommonModule]
})

export class ArticleComponent {
    article: Article | any;
    constructor() {}

    voteUp(): boolean {
        this.article.voteUp();
        return false;
    }
    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }


}


