export class Speaker {
  image: String;
  name: String;
  title: String;
  about: Array<String>;

  constructor(image: String, name: String, title: String, about: Array<String>) {
    this.image = image;
    this.name = name;
    this.title = title;
    this.about = about;
  }
}
