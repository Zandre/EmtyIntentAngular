import { FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { CreateForceUser } from './../dtos/create-force-user';

//     ____      __             __     ______                           __           __
//    /  _/___  / /____  ____  / /_   / ____/__  ____  ___  _________ _/ /____  ____/ /
//    / // __ \/ __/ _ \/ __ \/ __/  / / __/ _ \/ __ \/ _ \/ ___/ __ `/ __/ _ \/ __  /
//  _/ // / / / /_/  __/ / / / /_   / /_/ /  __/ / / /  __/ /  / /_/ / /_/  __/ /_/ /
// /___/_/ /_/\__/\___/_/ /_/\__/   \____/\___/_/ /_/\___/_/   \__,_/\__/\___/\__,_/

export class CreateForceUserFormGroup {

  static createFromDto(dto: CreateForceUser): FormGroup {
    const formGroup = CreateForceUserFormGroup.create();
    formGroup.setValue(dto);
    return formGroup;
  }

  static create(validators?: ValidatorFn[]): FormGroup {
    return new FormGroup({
      name: new FormControl(null, []),
      side: new FormControl(null, []),
      speciality: new FormControl(null, []),
      lightSaberColor: new FormControl(null, [])
    }, validators);
  }

  static createWithArrayFix(validators?: ValidatorFn[]): FormGroup {
    return new FormGroup({
      name: new FormControl(null, []),
      side: new FormControl(null, []),
      speciality: new FormControl(null, []),
      lightSaberColor: new FormControl(null, [])
    }, validators);
  }

  static createFormFromDto(dto: CreateForceUser): FormGroup {

    let fb = new FormBuilder();

    return fb.group({
      name: [dto.name, []],
      side: [dto.side, []],
      speciality: [dto.speciality, []],
      lightSaberColor: [dto.lightSaberColor, []]
    });
  }
}
