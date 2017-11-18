export class Introduction {
  icon: String;
  tabName: String;
  title: String;
  text: String;
  image: String;
  video: boolean;
  links: Array<Links>;

  constructor(icon: String, tabName: String, title: String, text: String, image: String, video: boolean, links: Array<Links>) {
    this.icon = icon;
    this.tabName = tabName;
    this.title = title;
    this.text = text;
    this.image = image;
    this.video = video;
    this.links = links;
  }
}

export class Links {
  name: String;
  link: String;

  constructor(name: String, link: String) {
    this.name = name;
    this.link = link;
  }
}
