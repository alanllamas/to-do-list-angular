import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      Cpassword: ['', Validators.required],
      first_name: ['', Validators.required], 
      last_name: ['', Validators.required], 
      email: ['', Validators.required], 
    });

  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let user = {
      username: this.f.username.value,
      password: this.f.password.value,
      first_name: this.f.first_name.value,
      last_name: this.f.last_name.value,
      email: this.f.email.value,
    }

    this.loading = true;
    this.authService.Signin(user)
    .subscribe(
      data => {
          console.log(data)
          window.location.pathname = "/login";


        // this.router.navigate([this.returnUrl]);
      },
      error => {
        this.error = error;
        this.loading = false;
      });
}

}
