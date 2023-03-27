import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static _nambersInstanceOrc = 0;
      
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._nambersInstanceOrc += 1;
  }
      
  public get maxLifePoints():number {
    return this._maxLifePoints;
  }
      
  public static createdRacesInstances():number {
    return this._nambersInstanceOrc;
  }
}