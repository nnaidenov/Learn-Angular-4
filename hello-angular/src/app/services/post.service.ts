import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  create(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  update(id, body) {
    return this.http.patch(this.url + '/' + id, JSON.stringify(body));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id);
  }
}
