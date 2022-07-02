import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../blog.model';
import { BlogService } from './../../blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postForUpdateAndDeletion: Post | undefined;
  comments: Comment [] = []
  comm: Comment | undefined;
  pst: Post | undefined;
  @Input('post') post:Post | undefined;

  commentForm: FormGroup =new FormGroup({
    commentByUser : new FormControl(null,[])
  })

  blogForm: FormGroup =new FormGroup({
    descriptionByUser : new FormControl(null,[])
  })

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    let id = this.post?.postId;
    this.blogService.getAllCommentsByPostId(id)
    .subscribe({
      next:(comments)=>{
        this.comments=comments;
      }
    })
  }

  addPost(){
    let id=this.post?.userId;
    let description=this.blogForm?.controls?.['descriptionByUser'].value

    this.blogService.addPost(description)
  }

  addComment(){
    let id=this.post?.postId;
    let comment=this.commentForm?.controls?.['commentByUser'].value

    this.blogService.addComment(id,comment)
  }

  deleteThePost(id:string | undefined){
    this.blogService.deletePostByPostId(id)
  }

  updateThePost(post: Post | undefined){
     let id= post?.postId;
    let body=post;
    this.blogService.updatePostByPostId(id,body)
    .subscribe({
      next:(postForUpdateAndDeletion)=>{
        this.postForUpdateAndDeletion= postForUpdateAndDeletion;
      }
    })
  }

  deleteTheComment(id :string | undefined){
    this.blogService.deleteCommentByCommentId(id)
  }

  updateTheComment(comment :Comment | undefined){
    // let id= comment?.commentId;
    // let body=comment;
    // this.blogService.updateCommentByCommentId(id,body)
    // .subscribe({
    //   next:(comment)=>{
    //     this.comment= comment;
    //   }
    // })
  }
}
