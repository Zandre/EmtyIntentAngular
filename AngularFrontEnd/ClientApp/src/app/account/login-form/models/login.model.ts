import { prop, required, email, password } from "@rxweb/reactive-form-validators";

export class LoginModel {

  @prop()
  @required()
  @email()
  email: string;

  @prop()
  @required()
  @password({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true} })
  password: string;

  static createEmpty(): LoginModel {
    return new LoginModel();
  }
}
