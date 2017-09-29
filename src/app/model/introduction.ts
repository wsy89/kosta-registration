export class Introduction {
  icon: String;
  tabName: String;
  title: String;
  text: String;
  image: String;
  video: boolean;

  constructor(icon: String, tabName: String, title: String, text: String, image: String, video: boolean) {
    this.icon = icon;
    this.tabName = tabName;
    this.title = title;
    this.text = text;
    this.image = image;
    this.video = video;
  }
}
