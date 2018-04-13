import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAll()
      .subscribe(
        posts => this.posts = posts
      );
  }

  createPost(input: HTMLInputElement) {
    const post = {
      title: input.value
    };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.postService.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadRequestError) {
            // this.form.setErrors(error.orugubalErrors);
            console.log('Error');
          } else {
            throw error;
          }
        });
  }

  updatePost(post) {
    this.postService.update(post.id, { isRead: true })
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(post.id)
      .subscribe(
        null,
        (error: AppError) => {
          this.posts.splice(index, 0, post);

          if (error instanceof NotFoundError) {
            alert('This post has already been deleted.');
          } else {
            throw error;
          }
        });
  }
}
