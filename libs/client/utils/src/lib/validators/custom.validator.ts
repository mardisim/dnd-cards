import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export const CustomValidators = {
  isEqualWith(compareTo: FormControl) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value !== compareTo.value) {
        return { isEqualWith: true };
      }
      return null;
    };
  },
  patternValidator(pattern: string | RegExp, errorName: string): ValidatorFn {
    const patternValidator = Validators.pattern(pattern);

    return (control: AbstractControl): ValidationErrors | null => {
      const validationResult = patternValidator(control);

      if (validationResult) {
        return { [errorName]: true };
      }
      return null;
    };
  },
  passwordStrength(config: any): ValidatorFn {
    return Validators.compose([
      Validators.minLength(config.minLength),
      CustomValidators.patternValidator(/[A-Z]/, 'containsUppercase'),
      CustomValidators.patternValidator(/[a-z]/, 'containsLowercase'),
      CustomValidators.patternValidator(/[0-9]/, 'containsNumbers'),
      CustomValidators.patternValidator(/(?=.*\W)/, 'containsSpecialCharacters'),
    ]) as ValidatorFn;
  },
};
