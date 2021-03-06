import { prop, required } from '@rxweb/reactive-form-validators';

import { ForceUser } from 'src/@generated/dtos/force-user';
import { Side } from 'src/@generated/enums/side-enum';
import { Speciality } from 'src/@generated/enums/speciality-enum';
import { LightSaberColor } from 'src/@generated/enums/light-saber-color-enum';
import { SideList } from 'src/@generated/enum_lists/side-list';
import { SpecialityList } from 'src/@generated/enum_lists/speciality-list';
import { LightSaberColorList } from 'src/@generated/enum_lists/light-saber-color-list';

export class ForceUserModel implements ForceUser {

  @prop()
  id: string;

  @prop()
  @required()
  side: Side;

  @prop()
  @required()
  speciality: Speciality;

  @prop()
  @required()
  lightSaberColor: LightSaberColor;

  @prop()
  @required()
  name: string;

  get sideDescription(): string  {
    return SideList.getDescription(this.side);
  }

  get specialityDescription(): string {
    return SpecialityList.getDescription(this.speciality);
  }

  get lightSaberColorDescription(): string {
    return LightSaberColorList.getDescription(this.lightSaberColor);
  }

  static createFromDto(forceUser: ForceUser): ForceUserModel {
    const model = new ForceUserModel();

    model.id = forceUser.id;
    model.side = forceUser.side;
    model.speciality = forceUser.speciality;
    model.lightSaberColor = forceUser.lightSaberColor;
    model.name = forceUser.name;

    return model;
  }

  static createEmpty(): ForceUserModel {
    return new ForceUserModel();
  }

}
