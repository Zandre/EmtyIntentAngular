import { CreateForceUser } from 'src/@generated/dtos/create-force-user';
import { LightSaberColor } from 'src/@generated/enums/light-saber-color-enum';
import { Speciality } from 'src/@generated/enums/speciality-enum';
import { Side } from 'src/@generated/enums/side-enum';
import { ForceUserModel } from './force-user.model';

export class CreateForceUserModel implements CreateForceUser {

  name: string;
  side: Side;
  speciality: Speciality;
  lightSaberColor: LightSaberColor;

  static createFromModel(model: ForceUserModel): CreateForceUserModel {
    const createModel = new CreateForceUserModel();
    createModel.name = model.name;
    createModel.side = model.side;
    createModel.speciality = model.speciality;
    createModel.lightSaberColor = model.lightSaberColor;
    return createModel;
  }
}
