import { Component, isStandalone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VotesComponent } from "./votes/votes.component";
import { ArticleComponent } from "./votes/article/article.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, VotesComponent, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-votes-app';
}
