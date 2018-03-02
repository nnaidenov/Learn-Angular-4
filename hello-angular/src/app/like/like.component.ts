import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() likesCount: number;
  @Input() isActive: boolean;

  likeClick() {
    this.isActive = !this.isActive;

    if (this.isActive) {
      this.likesCount += 1;
    } else {
      this.likesCount -= 1;
    }
  }
}
