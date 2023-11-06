import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PasswordCheckerComponent} from "./components/password-checker/password-checker.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {EmailInputComponent} from "./components/email-input/email-input.component";
import {SubmitInputComponent} from "./components/submit-input/submit-input.component";

@NgModule({
  declarations: [
    AppComponent,
    PasswordCheckerComponent,
    EmailInputComponent,
    SubmitInputComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
