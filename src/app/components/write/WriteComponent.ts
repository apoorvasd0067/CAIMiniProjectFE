import { Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IBlog } from '../shared/models/Blog';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-write',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './write.component.html',
  styleUrl: './write.component.css'
})
export class WriteComponent  implements OnChanges{
  @Input() data: IBlog | null=null;
  @Output() onCloseModel= new EventEmitter();
  isSubmitted: boolean = false;
  a="Create";
  blogForm!: FormGroup;
  constructor(private fb: FormBuilder, private blog: BlogService, private router: Router) {
    
    const reg='[a-zA-Z\s\'\".,!: &]*';
    const urlPattern = 'https?:\/\/www\.[a-zA-Z]+.+co|in|com|org[/a-zA-Z0-9$-_.+!*\'(),%]*';
    const emailreg='[a-zA-Z0-9]+\@[gmail|email]+\.com';
    this.blogForm = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.pattern(reg), Validators.minLength(5)]),
      description: new FormControl('', [Validators.required, Validators.pattern(reg), Validators.minLength(20)]),
      link: new FormControl('', [Validators.required, Validators.pattern(urlPattern)]),
      email: new FormControl('', [Validators.required, Validators.pattern(emailreg)])
      
    });

  }
   onClose() {
     this.onCloseModel.emit(false);
   }

  ngOnChanges(): void {
    
    if(this.data){
      this.blogForm.patchValue({
        title:this.data?.title,
        description:this.data?.description,
        link:this.data?.link,
        email:this.data?.email

        
      });
    }
  }

  ngOnInit(): void {
  }

  createBlog() {
    const isFormValid = this.blogForm.valid;
    debugger;
    this.isSubmitted =  true;
    

    if (this.blogForm.valid) {
      const blogObj = {
        title: this.blogForm.value.title,
        description: this.blogForm.value.description,
        link: this.blogForm.value.link,
        email: this.blogForm.value.email
      };

      if (this.data) {
       
        this.blog
          .updateBlog(this.data.blogId as any, this.blogForm.value)
          .subscribe({
            next: (response: any) => {
              this.resetblogForm();
              
            },
          });
        }
      
      
    else{
      
      this.blog.createBlog(blogObj)
        .subscribe({
          next: () => {
            alert("Blog created Successfully!!");
            this.router.navigateByUrl('/home');
          },
          error: () => {
            alert("Invalid Email!!");
          }
        });

    }
    }
  
    else {

      console.error('password does not match');
    }
  }
  resetblogForm() {
    this.blogForm.reset();
    this.onClose();
  }

}
