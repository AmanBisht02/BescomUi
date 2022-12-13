import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisFormComponent } from './components/regis-form/regis-form.component';

const reUseComponents: any = [
  HeaderComponent,
  FooterComponent,
  LoginFormComponent,
  RegisFormComponent,
];

const reUseModules: any = [
  CommonModule,
  HttpClientModule,
  RouterModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [...reUseComponents],
  imports: [...reUseModules],
  exports: [...reUseComponents, ...reUseModules],
})
export class SharedModule {}
