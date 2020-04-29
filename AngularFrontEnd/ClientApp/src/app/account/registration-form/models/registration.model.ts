import { prop, required, email, minLength, maxLength } from '@rxweb/reactive-form-validators';

export class RegistrationModel {

  @prop()
  @required()
  @email()
  email: string;

    //@password({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}})
  // TODO: ZB
  @prop()
  @required()
  @minLength({value:5})
  @maxLength({value:10})
  password: string;

  @prop()
  @required()
  firstName: string;

  @prop()
  @required()
  lastName:  string;

  static createEmpty(): RegistrationModel {
    return new RegistrationModel();
  }
}
