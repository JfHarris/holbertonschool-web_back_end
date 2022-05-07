import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get sqft() { return this._sqft; }

  get floors() { return this._floors; }

  evacuationWarningMessage() {
    this.warning = `Evacuate slowly the ${this._floors} floors`;
    return this.warning;
  }
}
