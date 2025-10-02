import { ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';

const MIN_AGE = 13;

@ValidatorConstraint({ name: 'IsAdult', async: false })
export class IsAdult implements ValidatorConstraintInterface {
  validate(value: string) {
    const today = new Date();
    const birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= MIN_AGE;
  }

  defaultMessage() {
    return `You must be at least ${MIN_AGE} years old`;
  }
}
