import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import{FormBuilder, FormGroup,  FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';
import {Router} from '@angular/router';




@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  signupForm!:FormGroup;
  isSubmitted: boolean = false;
  constructor(private fb:FormBuilder, private auth:AuthService, private router: Router){
    const reg='[a-zA-z]*';
    const emailreg='[a-zA-Z0-9]+\@[gmail|email]+\.com';
    this.signupForm=this.fb.group({
      email: new FormControl('', [Validators.required, Validators.pattern(emailreg)]),
      fullName:new FormControl('', [Validators.required, Validators.pattern(reg), Validators.minLength(3)]),
      password:new FormControl('', [Validators.required]),
     cPassword:new FormControl('', [Validators.required])
    })
   
  }
  
  ngOnInit():void{
    
  }

  onSignup() {
    const isFormValid = this.signupForm.valid;
    debugger;
    this.isSubmitted =  true;
    
    //if(document.getElementById("pass").value == document.getElementById("cPassword").value){
     if (this.signupForm.valid) {
     
     // if (document.getElementById("Cpassword")===this.signupForm.controls['password'].value){
      // Extract form data (avoid using an unnecessary argument)
      const userObj = {
        email:this.signupForm.value.email,
        fullName:this.signupForm.value.fullName,
        password:this.signupForm.value.password
      };
      if(this.signupForm.value.password===this.signupForm.value.cPassword){
  
      // Perform registration logic using AuthService
      this.auth.signup(userObj)
        .subscribe({
          next: (res) => {
            alert(res.message); // Handle successful registration response
            this.router.navigateByUrl('/login')
          },
          error: () => {
            alert("User already Exist.Please login!!"); // Handle registration error
            this.router.navigateByUrl('/login')
          }
        });
       
      
  }
  else{
      alert("pasword and confirm password should match")    
  }
}
    else {
      // Handle form validation errors (optional)
      console.error('Invalid Form');
    }
  }
  }
  
