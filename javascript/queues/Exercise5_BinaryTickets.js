/**
 * 🎫 EJERCICIO 5: Generador de Turnos Binarios
 *
 * CONTEXTO: El banco tiene un sistema automático de turnos.
 * Genera turnos en secuencia binaria: 1, 10, 11, 100, 101, 110, 111...
 *
 * Input: n = 5
 * Output: ["1", "10", "11", "100", "101"]
 *
 * Esta secuencia se genera agregando "1" y "0" al final de los anteriores.
 * Mira el patrón: 1, luego 1+0=10, luego 1+1=11, luego 10+0=100...
 *
 * Usa una cola para generar la secuencia:
 * 1. Saca un número, imprímelo
 * 2. Agrega ese número + "0" a la cola
 * 3. Agrega ese número + "1" a la cola
 *
 * @param {number} n - Cantidad de turnos a generar
 * @returns {string[]} - Turnos en secuencia binaria
 */
function generateBinaryTickets(n) {
  // TODO: Implementa usando una cola
}

// Testing
console.log('🎫 Turnos binarios (n=5):', generateBinaryTickets(5));
// Expected: ["1", "10", "11", "100", "101"]

console.log('🎫 Turnos binarios (n=7):', generateBinaryTickets(7));
// Expected: ["1", "10", "11", "100", "101", "110", "111"]

console.log('✅ Generador de turnos funcionando');