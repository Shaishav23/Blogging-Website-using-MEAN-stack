import { Injectable } from "@angular/core";
import { Post } from "./post.model";

//Injectable provides this in the root level.
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[];

  getPosts() {
    //getting a true copy of the array
    return [...this.posts];
  }

  //Add's dependency injection
  addPost(title: string, content: string) {
    const post: Post ={title: title, content: content};
    this.posts.push(post);
  }
}
