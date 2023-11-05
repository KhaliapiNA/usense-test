import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.scss'],
})
export class PasswordCheckerComponent implements OnInit {
  private uppercase = new RegExp(`(?=.*[A-Za-z])`);
  private numbers = new RegExp(`(?=.*[0-9])`);
  private symbols = new RegExp(`(?=.*[!@#$%]+$)`);
  passwordCheck!: FormControl;

  ngOnInit() {
    this.passwordCheck = new FormControl('');
  }

  firstLineRule(password: string): string {
    if (this.uppercase.test(password) && this.numbers.test(password) && this.symbols.test(password)) {
      return '#54B435';
    }
    if (password.length < 8 && password.length >= 3 && (this.uppercase.test(password) || this.numbers.test(password) || this.symbols.test(password))) {
      return '#900C3F';
    }
     else if (this.uppercase.test(password) && this.numbers.test(password)) {
      return '#FF8D29';
    } else {
      return '#B9B4C7';
    }
  }

  secondLineRule(password: string): string {
    if (this.uppercase.test(password) && this.numbers.test(password) && this.symbols.test(password)) {
      return '#54B435';
    } else if (this.uppercase.test(password) && this.numbers.test(password)) {
      return '#FF8D29';
    } else {
      return '#B9B4C7';
    }
  }

  thirdLineRule(password: string): string {
    if (this.uppercase.test(password) && this.numbers.test(password) && this.symbols.test(password)) {
      return '#54B435';
    } else {
      return '#B9B4C7';
    }

  }

}
