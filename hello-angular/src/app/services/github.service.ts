import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubService extends DataService {

  constructor(http: Http) {
    super(http, 'https://api.github.com/users/nnaidenov/followers');
  }

}
