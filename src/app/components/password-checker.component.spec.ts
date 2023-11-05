import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordCheckerComponent } from './password-checker.component';
import { FormControl } from '@angular/forms';

describe('PasswordCheckerComponent', () => {
  let component: PasswordCheckerComponent;
  let fixture: ComponentFixture<PasswordCheckerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordCheckerComponent],
    });

    fixture = TestBed.createComponent(PasswordCheckerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial values for passwordCheck and the private regular expressions', () => {
    expect(component.passwordCheck).toBeInstanceOf(FormControl);
    expect(component['uppercase']).toEqual(expect.any(RegExp));
    expect(component['numbers']).toEqual(expect.any(RegExp));
    expect(component['symbols']).toEqual(expect.any(RegExp));
  });

  it('should return the correct color for firstLineRule', () => {
    expect(component.firstLineRule('')).toBe('#B9B4C7'); // Empty password
    expect(component.firstLineRule('abc')).toBe('#B9B4C7'); // Less than 3 characters
    expect(component.firstLineRule('abcdefg')).toBe('#900C3F'); // Less than 8 characters
    expect(component.firstLineRule('AB12')).toBe('#FF8D29'); // Uppercase and numbers
    expect(component.firstLineRule('AB!12')).toBe('#54B435'); // Uppercase, numbers, and symbols
  });

  it('should return the correct color for secondLineRule', () => {
    expect(component.secondLineRule('')).toBe('#B9B4C7'); // Empty password
    expect(component.secondLineRule('abc')).toBe('#B9B4C7'); // Less than 3 characters
    expect(component.secondLineRule('AB12')).toBe('#FF8D29'); // Uppercase and numbers
    expect(component.secondLineRule('AB!12')).toBe('#54B435'); // Uppercase, numbers, and symbols
  });

  it('should return the correct color for thirdLineRule', () => {
    expect(component.thirdLineRule('')).toBe('#B9B4C7'); // Empty password
    expect(component.thirdLineRule('AB12')).toBe('#54B435'); // Uppercase, numbers, and symbols
  });
});
