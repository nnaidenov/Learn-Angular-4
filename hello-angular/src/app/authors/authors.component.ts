import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  authors;
  imageUrl = '';
  colSpan = 2;
  isActive = true;
  email = 'Email';
  inputValue: '';

  constructor(authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
  }

  onKeyUp() {
    console.log('Enter: ', this.email);
  }

  onSave($event) {
    console.log($event);
    console.log('Saved');
  }
}
