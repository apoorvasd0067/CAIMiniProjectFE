import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import{FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService, private router: Router){}

  ngOnInit():void{
    this.loginForm=this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }

  
  onLogin() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.auth.login(credentials)
        .subscribe({
          next: (_res) => {
            alert('Login Successful!');
            this.router.navigateByUrl('/home');
           
          },
          error: (err) => {
            alert('Login Failed: ' + err.error.message);
          }
        });
    } else {
      console.log('Form is not valid');
    }
  }
}

