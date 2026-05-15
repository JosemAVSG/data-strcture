/**
 * ⚖️ EJERCICIO 5: Arreglo a BST Balanceado
 *
 * CONTEXTO: Tienes un arreglo de personas ordenadas por edad y necesitas
 * convertirlas en un árbol de búsqueda binario BALANCEADO.
 * Un árbol balanceado tiene mínima diferencia de altura entre ramas.
 *
 * Input: [-10, -3, 0, 5, 9] (personas ordenadas por edad)
 *
 * Output (árbol balanceado):
 *          0 (edad media)
 *        /   \
 *    -3       9
 *    /        \
 * -10         5
 *
 * Pista: El elemento del medio va a la raíz, luego recursivamente
 * lo mismo con izquierda y derecha.
 *
 * @param {number[]} sortedArray - Arreglo ordenado
 * @returns {Object} - Nodo raíz del BST
 */
function sortedArrayToBST(sortedArray) {
  // TODO: Convierte arreglo ordenado a BST balanceado
  // Función helper: build(low, high)
  // Si low > high, return null
  // mid = (low + high) / 2
  // node = TreeNode(array[mid])
  // node.left = build(low, mid-1)
  // node.right = build(mid+1, high)
  return null;
}

// Testing
const ages = [-10, -3, 0, 5, 9];
const bst = sortedArrayToBST(ages);

function inorder(node) {
  if (!node) return [];
  return [...inorder(node.left), node.val, ...inorder(node.right)];
}

console.log('⚖️ BST inorder:', inorder(bst));
// Expected: [-10, -3, 0, 5, 9] (ordenado)

console.log('✅ Array a BST funcionando');