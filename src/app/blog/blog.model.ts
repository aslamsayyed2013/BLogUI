export interface User{
  id:string
  userName:string,
  email:string,
  password:string
}

export interface Post{
  postId:string
  title:string,
  description:string,
  thumbnail:string,
  userId:string
}

export interface Comment{
  commentId:string,
  userName:string,
  comment:string,
  postId:string,
  userId:string
}
