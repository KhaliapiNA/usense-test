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
  private grey: string = '#B9B4C7';
  private red: string = '#900C3F';
  private yellow: string = '#FF8D29';
  private green: string = '#54B435';
  passwordCheck!: FormControl;

  ngOnInit() {
    this.passwordCheck = new FormControl('');
  }

  firstLineRule(password: string): string {
    if (this.CheckGreenLine(password)) {
      return this.green;
    } else if (this.CheckRedLine(password) && password.length < 8) {
      return this.red;
    } else if (this.CheckYellowLine(password) && password.length >= 8) {
      return this.yellow;
    } else {
      return this.grey;
    }
  }

  secondLineRule(password: string): string {
    if (this.CheckGreenLine(password)) {
      return this.green;
    } else if (this.CheckYellowLine(password) && password.length >= 8) {
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
    } else {
      return false;
    }
  }

  CheckYellowLine(password: string): boolean {
    if ((this.uppercase.test(password) && this.numbers.test(password)) ||
      (this.numbers.test(password) && this.symbols.test(password)) ||
      (this.uppercase.test(password) && this.symbols.test(password))) {
      return true;
    } else {
      return false;
    }
  }

  CheckRedLine(password: string): boolean {
    if (password.length < 8 && (this.uppercase.test(password) ||
      this.numbers.test(password) || this.symbols.test(password))) {
      return true;
    } else {
      return false;
    }
  }
}
