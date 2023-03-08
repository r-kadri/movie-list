import { Component } from '@angular/core';
import { Movie, MOVIES } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  dataSource: Movie[] = MOVIES;
  lesColonnes: string[] = ['title', 'year', 'director'];
  private selectedMovie: Movie | undefined;

  constructor() {
    this.selectedMovie = undefined;
  }

  public selectMovie(row: Movie) {
    if(row == this.selectedMovie)
      this.selectedMovie = undefined;
    else
      this.selectedMovie = row;
  }

  public getSelectedMovie(): Movie|undefined {
    return this.selectedMovie;
  }
}
