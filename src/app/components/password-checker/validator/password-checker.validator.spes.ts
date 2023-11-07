import { FormControl } from '@angular/forms';
import { passwordValidator} from "./password-checker.validator";

describe('Password Validator', () => {
  let control;

  beforeEach(() => {
    control = new FormControl('');
  });

  it('should return null for a strong password', () => {
    control.setValue('StrongP@ssw0rd');
    const result = passwordValidator(control);
    expect(result).toBeNull();
  });

  it('should return null for an empty password', () => {
    const result = passwordValidator(control);
    expect(result).toBeNull();
  });

  it('should return lowSecure error for a password less than 8 characters', () => {
    control.setValue('short');
    const result = passwordValidator(control);
    expect(result).toEqual({ lowSecure: true, easy: false, medium: false });
  });

  it('should return easy error for a password with only uppercase letters', () => {
    control.setValue('ONLYUPPERCASE');
    const result = passwordValidator(control);
    expect(result).toEqual({ lowSecure: false, easy: true, medium: false });
  });

  it('should return easy error for a password with only numbers', () => {
    control.setValue('12345678');
    const result = passwordValidator(control);
    expect(result).toEqual({ lowSecure: false, easy: true, medium: false });
  });

  it('should return easy error for a password with only symbols', () => {
    control.setValue('@#$%&*()');
    const result = passwordValidator(control);
    expect(result).toEqual({ lowSecure: false, easy: true, medium: false });
  });

  it('should return medium error for a password with uppercase letters and numbers', () => {
    control.setValue('Medium123');
    const result = passwordValidator(control);
    expect(result).toEqual({ lowSecure: false, easy: false, medium: true });
  });

  it('should return strong error for a password with uppercase letters, numbers, and symbols', () => {
    control.setValue('StrongP@ssw0rd');
    const result = passwordValidator(control);
    expect(result).toEqual({ lowSecure: false, easy: false, medium: false });
  });
});

