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
    } else if (password.length < 8 && (this.uppercase.test(password) || this.numbers.test(password) || this.symbols.test(password))) {
      return this.red;
    } else if (this.uppercase.test(password) && this.numbers.test(password)) {
      return this.yellow;
    } else {
      return this.grey;
    }
  }

  secondLineRule(password: string): string {
    if (this.CheckGreenLine(password)) {
      return this.green;
    } else if (this.uppercase.test(password) && this.numbers.test(password) && password.length >= 8) {
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

  CheckGreenLine(password: string): any {
    if (this.uppercase.test(password) && this.numbers.test(password) && this.symbols.test(password)) {
      return true;
    }
  }
}
