import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input() title: string;
  isOpen = false;

  toggleTab() {
    this.isOpen = !this.isOpen;
  }
}
