import { SlottedCounter as SlottedCounterInterface } from "./SlottedCounter.interface";

// Implementação do Slotted Counter
export class SlottedCounter implements SlottedCounterInterface {
    private counters: Record<string, number> = {};

    increment(slot: string): void {
        if (!this.counters[slot]) {
            this.counters[slot] = 0;
        }
        this.counters[slot]++;
    }

    decrement(slot: string): void {
        if (this.counters[slot]) {
            this.counters[slot]--;
        }
    }

    reset(slot: string): void {
        this.counters[slot] = 0;
    }

    getCount(slot: string): number {
        return this.counters[slot] || 0;
    }
}
