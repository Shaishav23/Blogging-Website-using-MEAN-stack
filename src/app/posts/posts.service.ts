import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { Subject } from "rxjs";

//Injectable provides this in the root level.
@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    //getting a true copy of the array
    return [...this.posts];
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  //Add's dependency injection
  addPost(title: string, content: string) {
    const post: Post ={title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
