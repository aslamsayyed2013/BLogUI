import { Component, OnInit } from '@angular/core';
import { BlogService } from './../blog.service';
import { User } from './blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  user: User | undefined;


  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    let id='2';
    this.blogService.getUserById(id)
    .subscribe({
      next:(resp)=>{
        debugger;
        this.user=resp;
      }
    })
  }

}
