import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [
  ]
})

export class AuthComponent implements OnInit{
  isLoginSelected: boolean | null = null;
  isPasswordMacthed: boolean | null = null;
  isWrongCredentials: boolean | null = null;

  sigUpForm: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.getJwt();
  }

  toggleForm(isLogin: boolean): void {
    this.isLoginSelected = isLogin;
  }

  passwordMatchValidator(control: FormGroup): boolean {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    return password && confirmPassword && password.value !== confirmPassword.value
      ? false : true;
  };

  signUpUser(form: FormGroup): void {
    if (form.invalid) {
      form.markAllAsTouched();
      return;
    }

    if (!this.passwordMatchValidator(form)) {
      console.log("Password mismatch!");
      this.isPasswordMacthed = false;
      return;
    }

    this.isPasswordMacthed = true;

    const signUpFormData = new FormData();
    signUpFormData.append('FullName', form.get('fullName')?.value);
    signUpFormData.append('Email', form.get('email')?.value);
    signUpFormData.append('Password', form.get('password')?.value);

    this.http.post(environment.BASE_URL + '/user/signup', signUpFormData).subscribe(
      (response) => {
        if (response === true) {
          this.isLoginSelected = true;
          this.isWrongCredentials = false;
        } else {
          this.isWrongCredentials = true;
        }
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  signInUser(form: FormGroup): void {
    if (form.invalid) {
      form.markAllAsTouched();
      return;
    }

    const signInFormData = new FormData();
    signInFormData.append('Email', form.get('email')?.value);
    signInFormData.append('Password', form.get('password')?.value);

    this.http.post<SignInResponse>(environment.BASE_URL + '/user/signin', signInFormData, { observe: 'response' }).subscribe(
      (response) => {
        if (response.status === 200) {
          this.isWrongCredentials = false;
          const jwtToken = response.body!.jwtToken;
          localStorage.setItem('jwtToken', jwtToken);
          this.router.navigate(['/dashboard']);
        } 
      },
      (error: any) => {
        this.isWrongCredentials = true;
        console.log(error);
      }
    )
  }


  getJwt(): void {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      if (this.isJwtValid(jwtToken)) {
        console.log(jwtToken);
        this.router.navigate(['/dashboard']);
      } else {
        localStorage.removeItem('jwtToken');
      }
    }
  }
  
  private isJwtValid(jwtToken: string): boolean {
    // TODO: Add your logic to validate the JWT, e.g., check expiration, signature, etc.
    return true;
  }

}

interface SignInResponse {
  jwtToken: string;
}