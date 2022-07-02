import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlogService } from 'src/app/blog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private blogService:BlogService) { }

  loginForm: FormGroup =new FormGroup({
    email : new FormControl(null,[]),
    password :new FormControl(null,[])
  })

  ngOnInit(): void {
  }

  signIn(){
    let email = this.loginForm?.controls?.['email'].value
    let password =  this.loginForm?.controls?.['password'].value

    this.blogService.getSignIn(email,password)
  }
}
