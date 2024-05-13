import { SlottedCounter } from "../../domain/counters/SlottedCounter";

// Controlador para interação com o Slotted Counter
export class CounterController {
    private slottedCounter: SlottedCounter;

    constructor(slottedCounter: SlottedCounter) {
        this.slottedCounter = slottedCounter;
    }

    incrementCounter(slot: string): void {
        this.slottedCounter.increment(slot);
    }

    decrementCounter(slot: string): void {
        this.slottedCounter.decrement(slot);
    }

    resetCounter(slot: string): void {
        this.slottedCounter.reset(slot);
    }

    getCount(slot: string): number {
        return this.slottedCounter.getCount(slot);
    }
}
