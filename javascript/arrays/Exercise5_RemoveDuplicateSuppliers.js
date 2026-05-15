/**
 * 🏭 EJERCICIO 5: Eliminar Proveedores Duplicados
 *
 * CONTEXTO: Necesitas enviar órdenes de compra a cada proveedor
 * UNA SOLA VEZ. Tienes una lista con códigos de proveedores repetidos.
 *
 * Input: ["PROV-001", "PROV-002", "PROV-001", "PROV-003", "PROV-002"]
 * Output: ["PROV-001", "PROV-002", "PROV-003"]
 *
 * @param {string[]} suppliers - Lista de proveedores (con duplicados)
 * @returns {string[]} - Lista sin proveedores repetidos
 */
function removeDuplicateSuppliers(suppliers) {
  // TODO: Elimina los duplicados
  // Pista: Usa un Set o verifica manualmente cada elemento
}

// Testing
const supplierList = ['PROV-001', 'PROV-002', 'PROV-001', 'PROV-003', 'PROV-002'];
console.log('🏭 Proveedores únicos:', removeDuplicateSuppliers(supplierList));

// Casos de prueba
console.assert(
  JSON.stringify(removeDuplicateSuppliers(['A', 'B', 'A', 'C'])) ===
  JSON.stringify(['A', 'B', 'C']),
  'Test 1 failed'
);

console.log('✅ Todos los tests pasaron');