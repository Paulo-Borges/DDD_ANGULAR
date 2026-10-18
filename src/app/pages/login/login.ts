import { Component, inject, OnInit, signal } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../../models/LoginModel';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  public readonly title = signal('Login');
  loginForm!: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly loginService: LoginService,
  ) {}
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitLogin() {
    debugger;
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;

    // this.loginService.LoginUsuario(dadosLogin).subscribe({
    //   next: (token) => {
    //     debugger;
    //     var nossoToken = token;
    //   },
    //   error: (error) => {},
    // });

    this.router.navigate(['/noticias']);
  }
}
