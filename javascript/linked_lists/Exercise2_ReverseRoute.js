/**
 * 🔄 EJERCICIO 2: Invertir Ruta de Entregas
 *
 * CONTEXTO: El GPS tuvo un fallo y ahora necesita invertir el orden
 * de las entregas para optimizar la ruta. El repartidor debe ir
 * del último punto al primero.
 *
 * Input: A -> B -> C -> D -> E
 * Output: E -> D -> C -> B -> A
 *
 * @param {Object} head - Nodo inicial de la lista
 * @returns {Object} - Lista invertida
 */

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseRoute(head) {
  // TODO: Invierte la lista enlazada
  // Pista: Usa tres punteros (prev, current, next)
  // No puedes usar arrays, debe ser in-place
}

// Testing
const route = new ListNode('A');
route.next = new ListNode('B');
route.next.next = new ListNode('C');
route.next.next.next = new ListNode('D');
route.next.next.next.next = new ListNode('E');

console.log('📍 Ruta original: A -> B -> C -> D -> E');
const reversed = reverseRoute(route);

// Imprimir resultado
function printList(node) {
  const values = [];
  while (node) {
    values.push(node.value);
    node = node.next;
  }
  return values.join(' -> ');
}

console.log('🔄 Ruta invertida:', printList(reversed));
// Expected: E -> D -> C -> B -> A

console.log('✅ Ruta invertida correctamente');