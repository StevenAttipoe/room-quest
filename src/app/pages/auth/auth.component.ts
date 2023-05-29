import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [
  ]
})
export class AuthComponent implements OnInit {
  isLoginSelected: boolean | null = null;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getJwt();
  }

  toggleForm(isLogin: boolean): void {
    this.isLoginSelected = isLogin;
  }

  signIn(): void {
    this.router.navigate(['/dashboard']);
  }

  getJwt(): void {
    //Check cache for JWT

    //If found:
      //If JWT is valid: route to dashboard 
  }

}
