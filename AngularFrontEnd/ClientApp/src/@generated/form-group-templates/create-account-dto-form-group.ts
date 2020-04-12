import { FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { CreateAccountDTO } from './../dtos/create-account-dto';

//     ____      __             __     ______                           __           __
//    /  _/___  / /____  ____  / /_   / ____/__  ____  ___  _________ _/ /____  ____/ /
//    / // __ \/ __/ _ \/ __ \/ __/  / / __/ _ \/ __ \/ _ \/ ___/ __ `/ __/ _ \/ __  /
//  _/ // / / / /_/  __/ / / / /_   / /_/ /  __/ / / /  __/ /  / /_/ / /_/  __/ /_/ /
// /___/_/ /_/\__/\___/_/ /_/\__/   \____/\___/_/ /_/\___/_/   \__,_/\__/\___/\__,_/

export class CreateAccountDTOFormGroup {

  static createFromDto(dto: CreateAccountDTO): FormGroup {
    const formGroup = CreateAccountDTOFormGroup.create();
    formGroup.setValue(dto);
    return formGroup;
  }

  static create(validators?: ValidatorFn[]): FormGroup {
    return new FormGroup({
      firstName: new FormControl(null, []),
      lastName: new FormControl(null, []),
      password: new FormControl(null, []),
      email: new FormControl(null, [])
    }, validators);
  }

  static createWithArrayFix(validators?: ValidatorFn[]): FormGroup {
    return new FormGroup({
      firstName: new FormControl(null, []),
      lastName: new FormControl(null, []),
      password: new FormControl(null, []),
      email: new FormControl(null, [])
    }, validators);
  }

  static createFormFromDto(dto: CreateAccountDTO): FormGroup {

    let fb = new FormBuilder();

    return fb.group({
      firstName: [dto.firstName, []],
      lastName: [dto.lastName, []],
      password: [dto.password, []],
      email: [dto.email, []]
    });
  }
}
