import { IAppState } from './store';
import { NgRedux, select } from 'ng2-redux';
import { Component } from '@angular/core';
import { INCREMENT } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select('counter') count;
  @select(['messaging', 'newMessages']) newMessages;
  @select( (s: IAppState) => s.messaging.newMessages ) newMessagesCount;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  increment() {
    this.ngRedux.dispatch({
      type: INCREMENT
    });
  }
}
