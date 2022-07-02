import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { LoginComponent } from './blog/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MyBlogComponent } from './blog/my-blog/my-blog.component';
import { AllBlogComponent } from './blog/all-blog/all-blog.component'


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    PostComponent,
    LoginComponent,
    MyBlogComponent,
    AllBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
