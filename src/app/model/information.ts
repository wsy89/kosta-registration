import {Price} from './Price';

export class Information {
  private _prices: Array<Price>;
  private _notes: Array<String>;
  private _howTo: Array<String>;
  private _howToDeposite: Array<String>;
  private _attention: Array<String>;
  private _howToGetThere: Array<StyledNote>;
  private _parkingInfo: Array<String>;

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

  get howToGetThere(): Array<StyledNote> {
    return this._howToGetThere;
  }

  set howToGetThere(value: Array<StyledNote>) {
    this._howToGetThere = value;
  }

  get parkingInfo(): Array<String> {
    return this._parkingInfo;
  }

  set parkingInfo(value: Array<String>) {
    this._parkingInfo = value;
  }
}

export class StyledNote {
  private _note: String;
  private _isHighlighted: boolean;

  constructor(note: String, isHighlighted: boolean) {
    this._note = note;
    this._isHighlighted = isHighlighted;
  }

  get note(): String {
    return this._note;
  }

  set note(value: String) {
    this._note = value;
  }

  get isHighlighted(): boolean {
    return this._isHighlighted;
  }

  set isHighlighted(value: boolean) {
    this._isHighlighted = value;
  }
}
