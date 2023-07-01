import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import Swal from 'sweetalert2';

import { Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: []
})
export class LoginPageComponent {
  private fb            = inject(FormBuilder);
  private authService: AuthService = inject(AuthService);
  private router: Router           = inject(Router);


  public loginForm: FormGroup = this.fb.group({
    email: ['oscar@google.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    const {email, password} = this.loginForm.value;

    this.authService.login(email, password)
      .subscribe({
          next: () => this.router.navigateByUrl('/dashboard'),
          error: (errorMessage) => {
            Swal.fire('Error', errorMessage, 'error');
          }
        }
      );
  }
}
