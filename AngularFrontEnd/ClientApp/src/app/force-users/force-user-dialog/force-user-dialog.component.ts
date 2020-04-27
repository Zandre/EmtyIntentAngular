import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { IFormGroup, RxFormBuilder } from '@rxweb/reactive-form-validators';

import { of } from 'rxjs';

import { ForceUserModel } from '../models/force-user.model';

import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SideList } from 'src/@generated/enum_lists/side-list';
import { SpecialityList } from 'src/@generated/enum_lists/speciality-list';
import { LightSaberColorList } from 'src/@generated/enum_lists/light-saber-color-list';
import { ForceUsers_TestServiceProxyService } from 'src/@generated/service-proxies/force-users_-test-service-proxy.service';
import { CreateForceUserModel } from '../models/CreateForceUserModel';
import { UpdateForceUserModel } from '../models/UpdateForceUserModel';

@Component({
  selector: 'app-force-user-dialog',
  templateUrl: './force-user-dialog.component.html',
  styleUrls: ['./force-user-dialog.component.scss']
})
export class ForceUserDialogComponent implements OnInit {

  forceUserFormGroup: IFormGroup<ForceUserModel>;

  faCheck = faCheck;
  faTimes = faTimes;

  sides$ = of(SideList.sides);
  specialities$ = of(SpecialityList.specialities);
  lightSaberColors$ = of(LightSaberColorList.lightSaberColors);

  constructor(@Inject(MAT_DIALOG_DATA) public _model: ForceUserModel,
  private readonly _rxFormBuilder: RxFormBuilder,
  private _dialogRef: MatDialogRef<ForceUserDialogComponent, ForceUserModel>,
  private readonly forceUsers_TestServiceProxyService: ForceUsers_TestServiceProxyService) { }

  ngOnInit() {

    this.forceUserFormGroup = this._rxFormBuilder.formGroup(ForceUserModel) as IFormGroup<ForceUserModel>;

    if(!!this._model) {
      this.forceUserFormGroup.patchModelValue(this._model);
    } else {
      const model = ForceUserModel.createEmpty();
      this.forceUserFormGroup.patchModelValue(model);
    }
  }

  close(): void {
    this._dialogRef.close();
  }

  save(): void {

    if (this.forceUserFormGroup.invalid) {
      return;
    }

    if(!!this.forceUserFormGroup.value.id) {
      this.forceUsers_TestServiceProxyService.updateForceUser(UpdateForceUserModel.createFromModel(this.forceUserFormGroup.modelInstance))
      .subscribe(() => {
        this._dialogRef.close(this.forceUserFormGroup.modelInstance)
      })
    } else {
      // Create new force user
      this.forceUsers_TestServiceProxyService.createForceUser(CreateForceUserModel.createFromModel(this.forceUserFormGroup.modelInstance))
      .subscribe((forceUserId: string) => {
        this.forceUserFormGroup.controls.id.patchValue(forceUserId);
        this._dialogRef.close(this.forceUserFormGroup.modelInstance)
      });
    }
  }
}
