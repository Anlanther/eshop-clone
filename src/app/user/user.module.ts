import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
