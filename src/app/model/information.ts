import {Price} from './Price';

export class Information {
  private _prices: Array<Price>;
  private _notes: Array<String>;
  private _howTo: Array<String>;
  private _howToDeposite: Array<String>;
  private _attention: Array<String>;
  private _location: Array<String>;


  get prices(): Array<Price> {
    return this._prices;
  }

  set prices(value: Array<Price>) {
    this._prices = value;
  }

  get notes(): Array<String> {
    return this._notes;
  }

  set notes(value: Array<String>) {
    this._notes = value;
  }

  get howTo(): Array<String> {
    return this._howTo;
  }

  set howTo(value: Array<String>) {
    this._howTo = value;
  }

  get howToDeposite(): Array<String> {
    return this._howToDeposite;
  }

  set howToDeposite(value: Array<String>) {
    this._howToDeposite = value;
  }

  get attention(): Array<String> {
    return this._attention;
  }

  set attention(value: Array<String>) {
    this._attention = value;
  }

  set location(value: Array<String>) {
    this._location= value;
  }
}
