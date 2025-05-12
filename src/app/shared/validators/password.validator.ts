import { AbstractControl, ValidationErrors } from '@angular/forms';

function passwordStrength(control: AbstractControl): ValidationErrors | null {
  const password = control.value;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[@#$%^&*()_+={}|;:"<>,.?]/.test(password)

  const isPasswordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;

  const validationErrors = {
    hasUpperCase: !hasUpperCase,
    hasLowerCase: !hasLowerCase,
    hasNumber: !hasNumber,
    hasSpecialSymbol: !hasSpecialChar
  }

  return isPasswordValid ? null : validationErrors;
}

const PasswordValidators = {
  passwordStrength
}

export default PasswordValidators;
