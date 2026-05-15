/**
 * 👨‍🍳 EJERCICIO 1: Pila de Pedidos de Pizza
 *
 * CONTEXTO: En Mama Mia, los pedidos de pizza llegan continuamente.
 * El chef necesita preparar el ÚLTIMO pedido recibido PRIMERO
 * (el más reciente es el más urgente).
 *
 * Métodos requeridos:
 * - push(pedido): agregar pedido
 * - pop(): quitar y devolver el último pedido
 * - peek(): ver el siguiente pedido sin quitarlo
 * - isEmpty(): verificar si no hay pedidos
 *
 * @description Implementa una clase Stack para pedidos de pizza
 */

class PizzaOrderStack {
  constructor() {
    this.orders = [];
  }

  // Agregar nuevo pedido (al final)
  push(order) {
    // TODO: Agrega el pedido a la pila
  }

  // Preparar el último pedido (LIFO)
  pop() {
    // TODO: Remueve y devuelve el último pedido
    // Si está vacía, devuelve null
  }

  // Ver siguiente pedido sin preparar
  peek() {
    // TODO: Devuelve el último pedido sin removerlo
    // Si está vacía, devuelve null
  }

  // ¿Hay pedidos pendientes?
  isEmpty() {
    // TODO: Devuelve true si no hay pedidos
  }

  // Mostrar estado de la cocina
  printKitchen() {
    console.log('🍕 Pedidos en cocina:', this.orders.slice().reverse().join(' <- '));
  }
}

// Testing
const kitchen = new PizzaOrderStack();

kitchen.push('Pizza Margherita');
kitchen.push('Pizza Pepperoni');
kitchen.push('Pizza Hawaiana'); // El más reciente

console.log('📋 Siguiente pizza:', kitchen.peek());
kitchen.printKitchen();

const prepared = kitchen.pop();
console.log('🍕 Pizza preparada:', prepared);
// Expected: Pizza Hawaiana (la última en entrar)

console.log('✅ Cocina funcionando');