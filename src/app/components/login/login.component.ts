import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import{AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import {Router} from '@angular/router';
import { WriteComponent } from '../write/WriteComponent';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  isSubmitted: boolean = false;
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService, private router: Router){
    
  }
  
  ngOnInit():void{
    const emailreg='[a-zA-Z0-9]+\@[gmail|email]+\.com';
    this.loginForm=this.fb.group({
      email:new FormControl('', [Validators.required, Validators.pattern(emailreg)]),
      password:new FormControl('', [Validators.required])
    })
  }
  
  
  onLogin() {
    const isFormValid = this.loginForm.valid;
    debugger;
    this.isSubmitted =  true;
    
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      //this.loadBlog(this.loginForm.value.email)
      this.auth.login(credentials)
        .subscribe({
          next: (_res) => {
            alert('Login Successful!!');
            this.router.navigateByUrl('/home');
            
            
           
          },
          error: () => {
            alert('Login Failed: Invalid Credentials!!');
          }
        });
    } else {
      console.log('Form is not valid');
    }
  }
  // loadBlog(data:FormControl){
  //   this.useremail=data;
  // }
}

