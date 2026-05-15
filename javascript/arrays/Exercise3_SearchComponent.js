/**
 * 🔍 EJERCICIO 3: Buscar Componente en Almacén
 *
 * CONTEXTO: Un cliente tiene un pedido urgente y necesita saber
 * si tenemos un componente específico en stock.
 *
 * Input: arr = [SKU-101, SKU-202, SKU-303, SKU-404, SKU-505], target = "SKU-303"
 * Output: 2 (índice donde se encuentra)
 * Output: -1 si no existe
 *
 * @param {string[]} skuList - Lista de códigos SKU en inventario
 * @param {string} target - Código que busca el cliente
 * @returns {number} - Índice del componente o -1 si no existe
 */
function searchComponent(skuList, target) {
  // TODO: Busca el componente en el array
  // Pista: Recorre el array hasta encontrarlo
}

// Testing
const inventory = ['SKU-101', 'SKU-202', 'SKU-303', 'SKU-404', 'SKU-505'];
console.log('🔎 SKU-303 encontrado en índice:', searchComponent(inventory, 'SKU-303'));
console.log('🔎 SKU-999 encontrado en índice:', searchComponent(inventory, 'SKU-999'));

// Casos de prueba
console.assert(searchComponent(['A', 'B', 'C'], 'B') === 1, 'Test 1 failed');
console.assert(searchComponent(['A', 'B', 'C'], 'D') === -1, 'Test 2 failed');
console.assert(searchComponent(['X'], 'X') === 0, 'Test 3 failed');

console.log('✅ Todos los tests pasaron');