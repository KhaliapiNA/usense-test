import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {passwordValidator} from "./validator/password-checker.validator";

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.scss'],
})
export class PasswordCheckerComponent {
  passwordCheck: FormControl = new FormControl('', [passwordValidator]);
}
