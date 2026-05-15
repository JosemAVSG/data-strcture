/**
 * 📋 EJERCICIO 4: Ordenar Pedidos por Prioridad
 *
 * CONTEXTO: El gerente de producción necesita ver los pedidos
 * ordenados por fecha de entrega para asignar recursos a los más urgentes.
 *
 * Input: [3, 1, 4, 1, 5, 9, 2, 6] (números representan días hasta entrega)
 * Output: [1, 1, 2, 3, 4, 5, 6, 9] (más próximos primero)
 *
 * @param {number[]} orderDays - Días restantes para cada pedido
 * @returns {number[]} - Pedidos ordenados por urgencia
 */
function sortOrdersByPriority(orderDays) {
  // TODO: Ordena los pedidos (puedes usar sort() o implementar bubble sort)
  // Pista: Los números menores son más urgentes
}

// Testing
const orders = [3, 1, 4, 1, 5, 9, 2, 6];
console.log('📦 Pedidos ordenados:', sortOrdersByPriority(orders));

// Casos de prueba
const test1 = sortOrdersByPriority([5, 3, 8, 1]);
console.assert(JSON.stringify(test1) === JSON.stringify([1, 3, 5, 8]), 'Test 1 failed');

console.log('✅ Todos los tests pasaron');