import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubService } from './services/github.service';
import { AppErrorHandler } from './common/app-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubProfileComponent,
    GithubFollowersComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'followers',
        component: GithubFollowersComponent
      },
      {
        path: 'profile/:username',
        component: GithubProfileComponent
      }
    ])
  ],
  providers: [
    GithubService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
