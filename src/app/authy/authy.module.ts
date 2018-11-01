import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthyRoutingModule } from './authy-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    AuthyRoutingModule
  ],
  declarations: [SigninComponent, SignupComponent],
  providers: [AuthService]
})
export class AuthyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthyModule,
      providers: [AuthService]
    }
  }
}
