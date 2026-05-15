/**
 * 🔧 EJERCICIO 2: Cola con Dos Pilas
 *
 * CONTEXTO: Ejercicio teórico. Implementa una COLA usando dos PILAS.
 * Una cola es FIFO (First In First Out), pero las pilas son LIFO.
 * ¿Cómo lograr ese comportamiento?
 *
 * Pista: La pila "entrada" recibe elementos.
 * Cuando necesitas remover, mueve todo a la pila "salida" y hace pop.
 *
 * Métodos requeridos:
 * - push(x): agregar al final
 * - pop(): remover del frente
 * - peek(): ver el frente
 * - empty(): verificar si está vacía
 */

class QueueWithStacks {
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  // Agregar cliente (entra por input)
  push(x) {
    // TODO: Implementar usando dos stacks
  }

  // Atender cliente (sale por output)
  pop() {
    // TODO: Mueve elementos de input a output si output vacío
  }

  // Ver siguiente en atender
  peek() {
    // TODO: Ver el frente de la cola
  }

  // ¿Hay clientes esperando?
  empty() {
    // TODO: Verificar si ambas pilas están vacías
  }
}

// Testing
const queue = new QueueWithStacks();
queue.push('Cliente A');
queue.push('Cliente B');
queue.push('Cliente C');

console.log('👤 Siguiente:', queue.peek());
// Expected: Cliente A

console.log('✅ Atendido:', queue.pop());
// Expected: Cliente A

console.log('✅ Atendido:', queue.pop());
// Expected: Cliente B

console.log('✅ Cola con stacks implementada');