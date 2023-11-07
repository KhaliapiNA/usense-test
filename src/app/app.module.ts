import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {PasswordCheckerComponent} from "./components/password-checker/password-checker.component";
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
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
