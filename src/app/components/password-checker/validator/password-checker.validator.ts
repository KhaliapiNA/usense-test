import {AbstractControl, ValidationErrors} from '@angular/forms';

const uppercaseRegExp = new RegExp(`(?=.*[A-Za-z])`);
const numbersRegExp = new RegExp(`(?=.*[0-9])`);
const symbolsRegExp = new RegExp(`(?=.*[!@#$%]+$)`);

export function passwordValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  const strong = isStrong(value);

  if (value === '' || strong) return null;

  const lowSecure = isLowSecure(value);
  const easy = isEasy(value);
  const medium = isMedium(value);

  return {lowSecure, easy, medium};
}

function isLowSecure(value: string): boolean {
  return value.length < 8;
}

function isEasy(value: string): boolean {
  return (
    value.length >= 8 &&
    (uppercaseRegExp.test(value) ||
      numbersRegExp.test(value) ||
      symbolsRegExp.test(value))
  );
}

function isMedium(value: string): boolean {
  return (
    value.length >= 8 &&
    uppercaseRegExp.test(value) &&
    numbersRegExp.test(value)
  );
}

function isStrong(value: string): boolean {
  return (
    value.length >= 8 &&
    uppercaseRegExp.test(value) &&
    numbersRegExp.test(value) &&
    symbolsRegExp.test(value)
  );
}
