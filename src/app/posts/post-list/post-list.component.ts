import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy{
  // posts = [
  //   {title: 'First Post', content: 'This is the first post content'},
  //   {title: 'Second Post', content: 'This is the second post content'},
  //   {title: 'Third Post', content: 'This is the third post content'}
  // ]
  posts: Post[] = [];
  private postsSub: Subscription;

  //Add's dependency injection
  //'public' will create a new property and store the incoming value in that property.
  constructor(public postsService: PostsService) {}

  ngOnInit(){
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
    this.posts = posts;
    });
  }
  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }
}
