import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, User } from './blog/blog.model';
import { map } from 'rxjs/operators';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {


  private baseUrl:string = 'http://localhost:4000'


  constructor(private http:HttpClient) { }

  getSignIn(email:string,password:string) {
    return this.http.get(this.baseUrl + `/signin`,email,password);
  }

  addPost( post: Post) {
    return this.http.post<Post>(this.baseUrl + `/posts/`,post);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + `/user/profile/${id}`)
    .pipe(map(User=>User));
  }

  getAllBlogs() {
    return this.http.get<Post []>(this.baseUrl + `/posts/allpost`)
    .pipe(map(post=>post))
  }

  getMyBlogs(id: string | undefined) {
    return this.http.get<Post []>(this.baseUrl + `/posts/mypost/${id}`)
  }

  getBlogById(id: string | undefined) {
    return this.http.get<Post>(this.baseUrl + `/posts/post/${id}`)
  }

  deletePostByPostId(id: string | undefined) {
    return this.http.delete<Post>(this.baseUrl + `/post/${id}`)
  }

  updatePostByPostId(id: string | undefined, body: Post | undefined) {
    return this.http.put<Post>(this.baseUrl + `/posts/post/${id}`,body)
  }

  getAllCommentsByPostId(id: string | undefined) {
    return this.http.get<Comment []>(this.baseUrl + `/comments/post/${id}`)
  }

  deleteCommentByCommentId(id: string | undefined) {
    return this.http.delete<Comment>(this.baseUrl + `/comments/comment/${id}`);
  }

  updateCommentByCommentId(id: string | undefined,comment: Comment | undefined) {
    return this.http.put<Comment>(this.baseUrl + `/comments/comment/${id}`,comment);
  }

  addComment(id: string | undefined,comment: Comment | undefined) {
    return this.http.post(this.baseUrl + `/comments/comment/${id}`,comment);
  }

}
