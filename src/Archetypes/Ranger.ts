import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energy: EnergyType;
  static _rangerInstance = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'stamina';
    Ranger._rangerInstance += 1;
  }

  public get energyType(): EnergyType {
    return this._energy;    
  }

  public static createdArchetypeInstances(): number {
    return Ranger._rangerInstance;    
  }
}