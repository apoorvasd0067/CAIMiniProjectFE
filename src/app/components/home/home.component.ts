import { Component, OnInit } from '@angular/core';
import {NgFor, NgForOf} from "@angular/common";
import { BlogService } from '../../services/blog.service';
import { IBlog } from '../shared/models/Blog';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
   blogs:IBlog[]=[];
   constructor(private blogservice: BlogService){}


  ngOnInit(): void {
  this.getAllBlogs();
}
 getAllBlogs(){
  this.blogservice.getAllBlog().subscribe(
    (response:any)=>{
      this.blogs=response;
    }
  );
}
deleteblog(id: any){
  if(confirm("Are you sure you want to delete")){
 this.blogservice.deleteBlog(id).subscribe({
  next:(response:any)=>{
    this.blogs=response;
    alert("Blog deleted")
    this.getAllBlogs();
  }
  });
  }
} 

// }
// openModel(){
//   this.isModelOpen=true;
// }
// closeModel(){
//   this.isModelOpen=false;
// }
}

//   public confirmdel(){
//     if(confirm("Are you sure you want to delete")){
//       window.alert("Deleted")
//   }
// }
// blogs=[1,2,3,4,5,6]
// blogsdesc=[{
//   title:"Blog-",
//   desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   url:"url",
//   button:["Edit","Delete"]
    
  
// }]
// }