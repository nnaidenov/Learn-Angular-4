import { ActivatedRoute } from '@angular/router';
import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.queryParamMap,
      this.route.paramMap
    ])
    .switchMap(combined => {
      const id = combined[0].get('id');
      const pageNumber = combined[1].get('page');

      return this.githubService.getAll();
    })
    .subscribe(followers => {
      this.followers = followers;
    });
  }
}
