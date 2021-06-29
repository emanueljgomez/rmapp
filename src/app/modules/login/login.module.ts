import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';

@NgModule({
  declarations: [LoginComponent, AuthButtonComponent],
  imports: [CommonModule],
})
export class LoginModule {}
