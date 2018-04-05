import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getAll()
      .subscribe(
        followers => {
          console.log(followers);
          this.followers = followers;
        },
        (error: AppError) => {
          console.log(error);
        }
      );
  }

}
