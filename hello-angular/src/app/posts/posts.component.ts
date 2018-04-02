import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement) {
    const post = {
      title: input.value
    };

    this.postService.create(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      });
  }

  updatePost(post) {
    this.postService.update(post.id, {isRead: true})
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.postService.delete(post.id)
      .subscribe(response => {
        const index = this.posts.indexOf(post);

        this.posts.splice(index, 1);
      });
  }
}
