export class Price {
  description: String;
  date: String;
  north: String;
  south: String;

  constructor(description: String, date: String, north: String, south: String) {
    this.description = description;
    this.date = date;
    this.north = north;
    this.south = south;
  }
}
