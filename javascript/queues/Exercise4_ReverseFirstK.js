/**
 * 🔄 EJERCICIO 4: Invertir Primeros K Clientes
 *
 * CONTEXTO: El gerente del banco quiere hacer una promoción
 * especial y necesita invertir el orden de los primeros K clientes
 * en la fila de espera.
 *
 * Input: cola = [A, B, C, D, E], K = 3
 * Output: [C, B, A, D, E]
 *
 * Los primeros 3 se invierten, el resto queda igual.
 *
 * @param {string[]} queue - Cola de clientes
 * @param {number} k - Número de clientes a invertir
 * @returns {string[]} - Cola con primeros K invertidos
 */
function reverseFirstK(queue, k) {
  // TODO: Invierte los primeros K elementos de la cola
  // Pista: Usa una pila temporal para invertir
}

// Testing
const bankQueue = ['A', 'B', 'C', 'D', 'E'];
console.log('🎫 Original:', bankQueue.join(' -> '));

const reversed = reverseFirstK(bankQueue, 3);
console.log('🔄 Primeros 3 invertidos:', reversed.join(' -> '));
// Expected: C -> B -> A -> D -> E

const queue2 = ['1', '2', '3', '4'];
console.log('🎫 Original:', queue2.join(' -> '));
const reversed2 = reverseFirstK(queue2, 2);
console.log('🔄 Primeros 2 invertidos:', reversed2.join(' -> '));
// Expected: 2 -> 1 -> 3 -> 4

console.log('✅ Inversión de K funciona');