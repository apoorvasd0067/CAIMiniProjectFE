import { Component } from '@angular/core';
import {NgFor, NgForOf} from "@angular/common";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public confirmdel(){
    if(confirm("Are you sure you want to delete")){
      window.alert("Deleted")
  }
}
blogs=[1,2,3,4,5,6]
blogsdesc=[{
  title:"Blog-",
  desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  url:"url",
  button:["Edit","Delete"]
    
  
}]

}

