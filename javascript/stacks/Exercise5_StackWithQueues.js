/**
 * 🔧 EJERCICIO 5: Simular Pila con Dos Colas
 *
 * CONTEXTO: Ejercicio teórico. Implementa una PILA usando dos COLAS.
 * Una pila es LIFO (Last In First Out), pero las colas son FIFO.
 * ¿Cómo lograr ese comportamiento?
 *
 * Pista: Cuando haces push, mueve todos los elementos de q1 a q2,
 * luego intercambia las colas.
 *
 * Métodos requeridos:
 * - push(x): agregar elemento
 * - pop(): remover y devolver último elemento
 * - top(): ver último elemento
 * - empty(): verificar si está vacía
 */

class StackWithQueues {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(x) {
    // TODO: Implementar push usando colas
  }

  pop() {
    // TODO: Implementar pop
  }

  top() {
    // TODO: Ver el elemento superior
  }

  empty() {
    // TODO: Verificar si está vacía
  }
}

// Testing
const stack = new StackWithQueues();
stack.push(1);
stack.push(2);
stack.push(3);

console.log('📊 Top:', stack.top());
// Expected: 3

console.log('📊 Pop:', stack.pop());
// Expected: 3

console.log('📊 Pop:', stack.pop());
// Expected: 2

console.log('✅ Stack con colas implementado');