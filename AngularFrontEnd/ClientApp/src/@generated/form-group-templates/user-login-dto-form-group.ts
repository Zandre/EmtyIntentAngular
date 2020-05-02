import { FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { UserLoginDto } from './../dtos/user-login-dto';

//     ____      __             __     ______                           __           __
//    /  _/___  / /____  ____  / /_   / ____/__  ____  ___  _________ _/ /____  ____/ /
//    / // __ \/ __/ _ \/ __ \/ __/  / / __/ _ \/ __ \/ _ \/ ___/ __ `/ __/ _ \/ __  /
//  _/ // / / / /_/  __/ / / / /_   / /_/ /  __/ / / /  __/ /  / /_/ / /_/  __/ /_/ /
// /___/_/ /_/\__/\___/_/ /_/\__/   \____/\___/_/ /_/\___/_/   \__,_/\__/\___/\__,_/

export class UserLoginDtoFormGroup {

  static createFromDto(dto: UserLoginDto): FormGroup {
    const formGroup = UserLoginDtoFormGroup.create();
    formGroup.setValue(dto);
    return formGroup;
  }

  static create(validators?: ValidatorFn[]): FormGroup {
    return new FormGroup({
      email: new FormControl(null, []),
      name: new FormControl(null, []),
      jwt: new FormControl(null, [])
    }, validators);
  }

  static createWithArrayFix(validators?: ValidatorFn[]): FormGroup {
    return new FormGroup({
      email: new FormControl(null, []),
      name: new FormControl(null, []),
      jwt: new FormControl(null, [])
    }, validators);
  }

  static createFormFromDto(dto: UserLoginDto): FormGroup {

    let fb = new FormBuilder();

    return fb.group({
      email: [dto.email, []],
      name: [dto.name, []],
      jwt: [dto.jwt, []]
    });
  }
}
