import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-write',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './write.component.html',
  styleUrl: './write.component.css'
})
export class WriteComponent {
  blogForm!: FormGroup;
  constructor(private fb: FormBuilder, private blog: BlogService, private router: Router) {
    this.blogForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      link: new FormControl(),
      email: new FormControl('', [Validators.required])
      
    });

  }

  ngOnInit(): void {
  }

  createBlog() {

    if (this.blogForm.valid) {

      const blogObj = {
        title: this.blogForm.value.title,
        description: this.blogForm.value.description,
        link: this.blogForm.value.link,
        email: this.blogForm.value.email
      };


      this.blog.createBlog(blogObj)
        .subscribe({
          next: (res: any) => {
            alert(res.message);
            this.router.navigateByUrl('/home');
          },
          error: (err: any) => {
            alert(err?.error.message);
          }
        });

    }
    else {

      console.error('password does not match');
    }
  }
}
