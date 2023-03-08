import { Component } from '@angular/core';
import { Film, FILMS } from '../film';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  dataSource: Film[] = FILMS;
  lesColonnes: string[] = ['title', 'year', 'director'];
}
