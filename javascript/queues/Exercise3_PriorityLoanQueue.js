/**
 * 💰 EJERCICIO 3: Cola de Préstamos con Prioridad
 *
 * CONTEXTO: El banco tiene una cola de solicitudes de préstamos.
 * Las solicitudes con mayor urgencia (mayor prioridad número) se procesan primero.
 *
 * Estructura: PriorityQueue donde mayor número = más urgente
 *
 * Input: [
 *   { customer: "Empresa A", priority: 2 },
 *   { customer: "Familia García", priority: 5 },
 *   { customer: "Negocio Local", priority: 1 }
 * ]
 * Output: Familia García (priority 5) primero
 *
 * Pista: JavaScript no tiene PriorityQueue nativa, simula una
 */

class LoanRequest {
  constructor(customer, priority) {
    this.customer = customer;
    this.priority = priority;
  }
}

class PriorityLoanQueue {
  constructor() {
    this.requests = [];
  }

  // Agregar solicitud (ordenar por prioridad)
  enqueue(request) {
    // TODO: Agrega y mantiene orden por prioridad
    // Puedes usar sort o insertar en la posición correcta
  }

  // Procesar solicitud más urgente
  dequeue() {
    // TODO: Remueve el de mayor prioridad
  }

  // Ver siguiente a procesar
  peek() {
    // TODO: Ver el de mayor prioridad
  }
}

// Testing
const loanQueue = new PriorityLoanQueue();

loanQueue.enqueue(new LoanRequest('Empresa A', 2));
loanQueue.enqueue(new LoanRequest('Familia García', 5));
loanQueue.enqueue(new LoanRequest('Negocio Local', 1));

console.log('💵 Próximo préstamo:', loanQueue.peek().customer);
// Expected: Familia García

const processed = loanQueue.dequeue();
console.log('✅ Procesado:', processed.customer);
// Expected: Familia García

console.log('✅ Cola de préstamos funcionando');