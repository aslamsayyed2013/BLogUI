import { Component, Input, OnInit } from '@angular/core';
import { Post, User } from '../blog.model';
import { BlogService } from './../../blog.service';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.css']
})
export class MyBlogComponent implements OnInit {

  posts: Post []=[];
  @Input('user') user: User | undefined;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    let id=this.user?.id;
    this.blogService.getMyBlogs(id)
    .subscribe({
      next:(posts)=>{
        this.posts=posts;
      }
    })
  }

}
