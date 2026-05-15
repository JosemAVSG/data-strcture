/**
 * 👥 EJERCICIO 1: Cola de Clientes del Banco
 *
 * CONTEXTO: En Trust&Safe, los clientes son atendidos en orden de llegada.
 * El PRIMERO en llegar es el PRIMERO en ser atendido (FIFO).
 *
 * Métodos requeridos:
 * - enqueue(cliente): agregar cliente al final
 * - dequeue(): atender (quitar) cliente del frente
 * - peek(): ver quién sigue sin atender
 * - isEmpty(): verificar si hay clientes esperando
 *
 * @description Implementa una Queue para atención de clientes
 */

class CustomerQueue {
  constructor() {
    this.customers = [];
  }

  // Cliente llega al banco
  enqueue(customerName) {
    // TODO: Agrega cliente al final de la cola
  }

  // Atender cliente (FIFO)
  dequeue() {
    // TODO: Remueve y devuelve el cliente del frente
    // Si cola vacía, devuelve null
  }

  // Ver quién sigue en turno
  peek() {
    // TODO: Ver el primer cliente sin atender
    // Si vacío, devuelve null
  }

  // ¿Hay alguien esperando?
  isEmpty() {
    // TODO: Verifica si la cola está vacía
  }

  // Mostrar cola actual
  printQueue() {
    console.log('🎫 Cola:', this.customers.join(' -> '));
  }
}

// Testing
const bankQueue = new CustomerQueue();

bankQueue.enqueue('Juan');
bankQueue.enqueue('María');
bankQueue.enqueue('Pedro');

console.log('👤 Siguiente cliente:', bankQueue.peek());
bankQueue.printQueue();

const attended = bankQueue.dequeue();
console.log('✅ Cliente atendido:', attended);
// Expected: Juan (el primero en llegar)

bankQueue.printQueue();
// Expected: María -> Pedro

console.log('✅ Banco funcionando');