import { prop, required, email, password, minLength, maxLength } from "@rxweb/reactive-form-validators";

export class LoginModel {

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

  static createEmpty(): LoginModel {
    return new LoginModel();
  }

  static create(email: string): LoginModel {
    const model = new LoginModel();
    model.email = email;

    return model;
  }
}
