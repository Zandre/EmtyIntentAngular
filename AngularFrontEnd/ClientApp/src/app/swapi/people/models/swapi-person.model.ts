export class SwapiPerson {
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: number;
  mass: number;
  name: string;
  skinColor: string;

  static createSwapiPerson(httpResponse: any): SwapiPerson {
    const model = new SwapiPerson();

    model.birthYear = httpResponse.birth_year;
    model.eyeColor = httpResponse.eye_color;
    model.gender = httpResponse.gender;
    model.hairColor = httpResponse.hair_color;
    model.height = httpResponse.height as number;
    model.mass = httpResponse.mass as number;
    model.name = httpResponse.name;
    model.skinColor = httpResponse.skin_color;

    return model;
  }
}
