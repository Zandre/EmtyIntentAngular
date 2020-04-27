import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { IFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';

import { ForceUserModel } from '../models/force-user.model';

import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-force-user-dialog',
  templateUrl: './force-user-dialog.component.html',
  styleUrls: ['./force-user-dialog.component.scss']
})
export class ForceUserDialogComponent implements OnInit {

  forceUserFormGroup: IFormGroup<ForceUserModel>;

  faCheck = faCheck;
  faTimes = faTimes;

  constructor(@Inject(MAT_DIALOG_DATA) public _model: ForceUserModel,
  private readonly _rxFormBuilder: RxFormBuilder,
  private _dialogRef: MatDialogRef<ForceUserDialogComponent, ForceUserModel>,) { }

  ngOnInit() {

    this.forceUserFormGroup = this._rxFormBuilder.formGroup(ForceUserModel) as IFormGroup<ForceUserModel>;

    if(!!this._model) {

    } else {
      const model = ForceUserModel.createEmpty();
      this.forceUserFormGroup.patchModelValue(model);
    }

  }

}
