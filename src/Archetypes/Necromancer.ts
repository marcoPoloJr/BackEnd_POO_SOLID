import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energy: EnergyType;
  static _necromancerInstance = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'mana';
    Necromancer._necromancerInstance += 1;
  }

  public get energyType(): EnergyType {
    return this._energy;    
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._necromancerInstance;
  }
}