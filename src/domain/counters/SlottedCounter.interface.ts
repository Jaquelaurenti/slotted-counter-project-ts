// Definição da interface para o Slotted Counter
export interface SlottedCounter {
  increment(slot: string): void;
  decrement(slot: string): void;
  reset(slot: string): void;
  getCount(slot: string): number;
}
