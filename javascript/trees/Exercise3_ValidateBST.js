/**
 * 🔍 EJERCICIO 3: Validar Árbol de Búsqueda
 *
 * CONTEXTO: Un Binary Search Tree (BST) tiene una regla:
 * - Todos los nodos en el subárbol izquierdo son MENORES que la raíz
 * - Todos los nodos en el subárbol derecho son MAYORES que la raíz
 *
 * Esto debe cumplirse en TODOS los nodos del árbol.
 *
 * Ejemplo válido:
 *       5
 *      / \
 *     3   7
 *
 * Ejemplo inválido:
 *       5
 *      / \
 *     6   7   (6 > 5 pero está a la izquierda)
 *
 * @param {Object} root - Nodo raíz
 * @returns {boolean} - true si es un BST válido
 */
function isValidBST(root) {
  // TODO: Valida que el árbol cumpla las reglas de BST
  // Pista: Usa valores mínimos y máximos permitidos
  // Función helper: validate(node, min, max)
}

// Testing - BST válido
const validBST = {
  val: 5,
  left: { val: 3, left: null, right: null },
  right: { val: 7, left: null, right: null }
};

console.log('🔍 BST válido:', isValidBST(validBST));
// Expected: true

// BST inválido
const invalidBST = {
  val: 5,
  left: { val: 6, left: null, right: null }, // 6 > 5 pero está a la izquierda
  right: { val: 7, left: null, right: null }
};

console.log('🔍 BST inválido:', isValidBST(invalidBST));
// Expected: false

console.log('✅ Validación de BST funcionando');