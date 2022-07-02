import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog.service';
import { Post } from '../blog.model';

@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.css']
})
export class AllBlogComponent implements OnInit {

  posts:Post[]=[];
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getAllBlogs()
    .subscribe({
      next:(posts)=>{
        debugger;
        this.posts=posts;
      }
    })
  }

  getPostById(){
    // lets id
  }

}
