import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  post = {
    title: 'Title',
    isFavorite: true
  };

  tweet = {
    body: 'Here is the body of tweet...',
    isLiked: true,
    likesCount: 5
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite Changed: ' + eventArgs.newValue);
  }
}
