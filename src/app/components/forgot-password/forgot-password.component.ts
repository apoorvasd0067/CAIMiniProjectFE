import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import{FormBuilder, FormGroup,  FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  forgotForm!:FormGroup;
  constructor(private fb:FormBuilder, private auth:AuthService, private router: Router){
    this.forgotForm=this.fb.group({
      email: new FormControl('', [Validators.required]),
      password:new FormControl('', [Validators.required]),
     cPassword:new FormControl('', [Validators.required])
    })
}
onsubmit(){
  if (this.forgotForm.valid) {
    const userObj = {
      email:this.forgotForm.value.email,
      password: this.forgotForm.value.password
      
    };
    if(this.forgotForm.value.password===this.forgotForm.value.cPassword){
  
    this.auth
          .updatePassword(this.forgotForm.value.email as string, userObj)
          .subscribe({
            next: (res: any) => {
              alert(res.message)
              
            }
            
          });
        }
      }
  }

}
