import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  _race: Race;
  _archetyp: Archetype;
  _maxLifePoints: number;
  _lifePoints: number;
  _strength: number;
  _defense:number;
  _dexterity:number;
  _energy:Energy;

  constructor(name:string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetyp = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetyp.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  receiveDamage(attackPoints: number):number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage; 
    } else { this._lifePoints -= 1; }
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;    
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }
    
  get strength(): number {
    return this._strength;
  }
    
  get defense(): number {
    return this._defense;
  }
    
  get energy(): Energy {
    return { ...this._energy };
  }
    
  get race(): Race {
    return this._race;
  }
    
  get archetype(): Archetype {
    return this._archetyp;
  }
    
  get maxLifePoinst(): number {
    return this._maxLifePoints;
  }
    
  get dexterity(): number {
    return this._dexterity;
  }  
}
