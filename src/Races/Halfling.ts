import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static _nambersInstanceHalfling = 0;
    
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._nambersInstanceHalfling += 1;
  }
    
  public get maxLifePoints():number {
    return this._maxLifePoints;
  }
    
  public static createdRacesInstances():number {
    return this._nambersInstanceHalfling;
  }
}