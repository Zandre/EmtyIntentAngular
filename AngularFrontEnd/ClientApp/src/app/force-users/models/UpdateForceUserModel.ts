import { UpdateForceUser } from "src/@generated/dtos/update-force-user";
import { Side } from "src/@generated/enums/side-enum";
import { Speciality } from "src/@generated/enums/speciality-enum";
import { LightSaberColor } from "src/@generated/enums/light-saber-color-enum";
import { ForceUserModel } from "./force-user.model";

export class UpdateForceUserModel implements UpdateForceUser {
  id: string;
  side: Side;
  speciality: Speciality;
  lightSaberColor: LightSaberColor;
  name: string;

  static createFromModel(model: ForceUserModel): UpdateForceUserModel {
    const updateModel = new UpdateForceUserModel();
    updateModel.id = model.id;
    updateModel.name = model.name;
    updateModel.side = model.side;
    updateModel.speciality = model.speciality;
    updateModel.lightSaberColor = model.lightSaberColor;
    return updateModel;
  }
}
