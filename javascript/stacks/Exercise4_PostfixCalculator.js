/**
 * 🧮 EJERCICIO 4: Calculadora de Precios (Notación Postfix)
 *
 * CONTEXTO: El sistema de caja usa notación postfix para calcular
 * el total del pedido. Por ejemplo:
 * "2 3 +" significa "2 + 3 = 5"
 * "10 2 *" significa "10 * 2 = 20"
 *
 * Operadores soportados: + - * /
 *
 * Ejemplos:
 *   "2 3 +" -> 5
 *   "10 5 -" -> 5
 *   "3 4 * 2 +" -> 14  (3*4 + 2 = 14)
 *   "5 1 2 + 4 * + 3 -" -> 14  (5 + ((1+2)*4) - 3 = 14)
 *
 * @param {string} expression - Expresión postfix
 * @returns {number} - Resultado del cálculo
 */
function calculatePostfix(expression) {
  // TODO: Usa una pila para evaluar la expresión
  // Si es número, agrégalo a la pila
  // Si es operador, sacas los dos últimos números,
  // aplicas la operación y guardas el resultado
}

// Testing
console.log('💰 2 3 + =', calculatePostfix('2 3 +'));
// Expected: 5

console.log('💰 10 5 - =', calculatePostfix('10 5 -'));
// Expected: 5

console.log('💰 3 4 * 2 + =', calculatePostfix('3 4 * 2 +'));
// Expected: 14

console.log('💰 5 1 2 + 4 * + 3 - =', calculatePostfix('5 1 2 + 4 * + 3 -'));
// Expected: 14

console.log('✅ Calculadora funcionando');