import { SlottedCounter } from "./domain/counters/SlottedCounter";
import { CounterController } from "./presentation/controllers/CounterController";
// Criando uma instância do SlottedCounter
const slottedCounter = new SlottedCounter();

// Criando uma instância do CounterController e passando o SlottedCounter como argumento
const counterController = new CounterController(slottedCounter);

// Demonstrando a funcionalidade do CounterController
counterController.incrementCounter("A");
counterController.incrementCounter("A");
counterController.incrementCounter("B");
counterController.incrementCounter("C");
counterController.incrementCounter("C");
counterController.incrementCounter("C");

console.log("Contagem de A:", counterController.getCount("A")); // Saída: 2
console.log("Contagem de B:", counterController.getCount("B")); // Saída: 1
console.log("Contagem de C:", counterController.getCount("C")); // Saída: 3

counterController.decrementCounter("C");
console.log("Contagem de C após decremento:", counterController.getCount("C")); // Saída: 2

counterController.resetCounter("B");
console.log("Contagem de B após redefinição:", counterController.getCount("B")); // Saída: 0
