import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'IsValidDate', async: false })
export class IsValidDate implements ValidatorConstraintInterface {
  validate(value: string) {
    const year = new Date(value).getFullYear();
    return !isNaN(year) && year >= 1900;
  }

  defaultMessage() {
    return 'Date must be after 1900';
  }
}
