import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static _nambersInstanceElf = 0;
  
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._nambersInstanceElf += 1;
  }
  
  public get maxLifePoints():number {
    return this._maxLifePoints;
  }
  
  public static createdRacesInstances():number {
    return this._nambersInstanceElf;
  }
}