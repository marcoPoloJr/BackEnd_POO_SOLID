import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energy: EnergyType;
  static _mageInstance = 0;

  constructor(name:string) {
    super(name);
    this._energy = 'mana';
    Mage._mageInstance += 1;
  }

  public get energyType(): EnergyType {
    return this._energy;    
  }

  public static createdArchetypeInstances(): number {
    return Mage._mageInstance;
  }
}