/**
 * 🔧 EJERCICIO 2: Validar Expresión de Pedido
 *
 * CONTEXTO: El sistema de pedidos usa expresiones como:
 * "((PIZZA + BEBIDA) * POSTRE)"
 * Necesitas verificar que los paréntesis estén balanceados.
 * Si no, el sistema no puede procesar el pedido.
 *
 * Ejemplos:
 *   "(PIZZA)" -> true
 *   "(PIZZA + (BEBIDA))" -> true
 *   "(PIZZA + BEBIDA)" -> false (falta un paréntesis)
 *   "(PIZZA ((BEBIDA)" -> false (sobra un paréntesis)
 *
 * @param {string} expression - Expresión del pedido
 * @returns {boolean} - true si está balanceada
 */
function validateOrderExpression(expression) {
  // TODO: Usa una pila para verificar paréntesis
  // Cada '(' agrégalo a la pila
  // Cada ')' verifica que haya un '(' matching
}

// Testing
console.log('🔍 (PIZZA):', validateOrderExpression('(PIZZA)'));
// Expected: true

console.log('🔍 (PIZZA + (BEBIDA)): ', validateOrderExpression('(PIZZA + (BEBIDA))'));
// Expected: true

console.log('🔍 (PIZZA + BEBIDA): ', validateOrderExpression('(PIZZA + BEBIDA)'));
// Expected: false

console.log('🔍 ((PIZZA)): ', validateOrderExpression('((PIZZA))'));
// Expected: true

console.log('✅ Validación de pedidos funcionando');