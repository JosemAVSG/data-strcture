/**
 * 📦 EJERCICIO 2: Inventario de Componentes
 *
 * CONTEXTO: La fábrica recibió un envío de componentes electrónicos.
 * El departamento de contabilidad necesita el total para calcular costos.
 * Tienes un array con las cantidades de cada tipo de componente.
 *
 * Input: [150, 200, 75, 300, 125]
 * Output: 850
 *
 * @param {number[]} quantities - Cantidades de cada componente
 * @returns {number} - Total de componentes
 */
function calculateInventoryTotal(quantities) {
  // TODO: Calcula la suma de todos los componentes
  // Pista: Usa un acumulador o el método reduce
}

// Testing
const components = [150, 200, 75, 300, 125];
console.log('📋 Total de componentes:', calculateInventoryTotal(components));

// Casos de prueba
console.assert(calculateInventoryTotal([150, 200, 75]) === 425, 'Test 1 failed');
console.assert(calculateInventoryTotal([10, 20, 30]) === 60, 'Test 2 failed');
console.assert(calculateInventoryTotal([]) === 0, 'Test 3 failed');

console.log('✅ Todos los tests pasaron');