import { ForceUser } from 'src/@generated/dtos/force-user';
import { Side } from 'src/@generated/enums/side-enum';
import { Speciality } from 'src/@generated/enums/speciality-enum';
import { LightSaberColor } from 'src/@generated/enums/light-saber-color-enum';
import { SideList } from 'src/@generated/enum_lists/side-list';
import { SpecialityList } from 'src/@generated/enum_lists/speciality-list';
import { LightSaberColorList } from 'src/@generated/enum_lists/light-saber-color-list';

export class ForceUserModel implements ForceUser {

  id: string;
  side: Side;
  speciality: Speciality;
  lightSaberColor: LightSaberColor;
  name: string;

  sideDescription: string;
  specialityDescription: string;
  lightSaberColorDescription: string;

  static createFromDto(forceUser: ForceUser): ForceUserModel {
    const model = new ForceUserModel();

    model.id = forceUser.id;
    model.side = forceUser.side;
    model.speciality = forceUser.speciality;
    model.lightSaberColor = forceUser.lightSaberColor;
    model.name = forceUser.name;

    model.sideDescription = SideList.getDescription(forceUser.side);
    model.specialityDescription = SpecialityList.getDescription(forceUser.speciality);
    model.lightSaberColorDescription = LightSaberColorList.getDescription(forceUser.lightSaberColor);

    return model;
  }

}
