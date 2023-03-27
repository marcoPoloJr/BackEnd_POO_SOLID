import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energy: EnergyType;
  static _warriorInstance = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'stamina';
    Warrior._warriorInstance += 1;
  }

  public get energyType(): EnergyType {
    return this._energy;    
  }

  public static createdArchetypeInstances(): number {
    return Warrior._warriorInstance;    
  }
}