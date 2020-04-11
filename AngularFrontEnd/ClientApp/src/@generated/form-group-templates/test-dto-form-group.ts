import { FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { TestDTO } from './../dtos/test-dto';

//     ____      __             __     ______                           __           __
//    /  _/___  / /____  ____  / /_   / ____/__  ____  ___  _________ _/ /____  ____/ /
//    / // __ \/ __/ _ \/ __ \/ __/  / / __/ _ \/ __ \/ _ \/ ___/ __ `/ __/ _ \/ __  /
//  _/ // / / / /_/  __/ / / / /_   / /_/ /  __/ / / /  __/ /  / /_/ / /_/  __/ /_/ /
// /___/_/ /_/\__/\___/_/ /_/\__/   \____/\___/_/ /_/\___/_/   \__,_/\__/\___/\__,_/

export class TestDTOFormGroup {

  static createFromDto(dto: TestDTO): FormGroup {
    const formGroup = TestDTOFormGroup.create();
    formGroup.setValue(dto);
    return formGroup;
  }

  static create(validators?: ValidatorFn[]): FormGroup {
    return new FormGroup({
      apprentice: new FormControl(null, []),
      master: new FormControl(null, [])
    }, validators);
  }

  static createWithArrayFix(validators?: ValidatorFn[]): FormGroup {
    return new FormGroup({
      apprentice: new FormControl(null, []),
      master: new FormControl(null, [])
    }, validators);
  }

  static createFormFromDto(dto: TestDTO): FormGroup {

    let fb = new FormBuilder();

    return fb.group({
      apprentice: [dto.apprentice, []],
      master: [dto.master, []]
    });
  }
}
