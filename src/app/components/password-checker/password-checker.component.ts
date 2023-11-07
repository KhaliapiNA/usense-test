import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.scss'],
})
export class PasswordCheckerComponent implements OnInit {
  private uppercase = new RegExp(`(?=.*[A-Za-z])`);
  private numbers = new RegExp(`(?=.*[0-9])`);
  private symbols = new RegExp(`(?=.*[!@#$%]+$)`);
  private grey: string;
  private red: string;
  private yellow: string;
  private green: string;
  passwordCheck!: FormControl;

  ngOnInit() {
    this.passwordCheck = new FormControl('');
    this.grey = '#B9B4C7';
    this.red = '#900C3F';
    this.yellow = '#FF8D29';
    this.green = '#54B435';
  }

  firstLineRule(password: string): string {
    if (this.CheckGreenLine(password)) {
      return this.green;
    } else if (this.CheckRedLine(password)) {
      return this.red;
    } else if (this.CheckYellowLine(password)) {
      return this.yellow;
    } else {
      return this.grey;
    }
  }

  secondLineRule(password: string): string {
    if (this.CheckGreenLine(password)) {
      return this.green;
    } else if (this.CheckYellowLine(password)) {
      return this.yellow;
    } else {
      return this.grey;
    }
  }

  thirdLineRule(password: string): string {
    if (this.CheckGreenLine(password)) {
      return this.green;
    } else {
      return this.grey;
    }
  }

  CheckGreenLine(password: string): boolean {
    if (this.uppercase.test(password) && this.numbers.test(password) && this.symbols.test(password)) {
      return true;
    }
  }

  CheckYellowLine(password: string): boolean {
    if ((this.uppercase.test(password) && this.numbers.test(password)) ||
      (this.numbers.test(password) && this.symbols.test(password)) ||
      (this.uppercase.test(password) && this.symbols.test(password)) &&
      password.length >= 8) {
      return true;
    }
  }

  CheckRedLine(password: string): boolean {
    if (password.length < 8 && (this.uppercase.test(password) ||
      this.numbers.test(password) || this.symbols.test(password))) {
      return true;
    }
  }
}
