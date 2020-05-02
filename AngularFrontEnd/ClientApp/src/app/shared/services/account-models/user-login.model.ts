export class UserLogin {
  name: string;
  email: string;
  loggedIn: boolean;

  static create(name: string, email: string, loggedIn: boolean): UserLogin {
    const model = new UserLogin();
    model.name = name;
    model.email = email;
    model.loggedIn = loggedIn;
    return model;
  }

  static createEmpty(): UserLogin {
    const model = new UserLogin();
    model.name = '';
    model.email = '';
    model.loggedIn = false;
    return model;
  }
}
