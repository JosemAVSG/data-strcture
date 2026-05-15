/**
 * 👪 EJERCICIO 4: Ancestro Común Más Bajo (LCA)
 *
 * CONTEXTO: Dos primos quieren encontrar su ancestro común más reciente.
 * El LCA de dos nodos es el antepasado más cercano a ambos.
 *
 * Ejemplo:
 *         Abuelo (A)
 *        /      \
 *    Padre (P)  Tío (T)
 *    /    \
 *  Yo    Primo
 *
 * LCA(Padre, Primo) = Padre
 * LCA(Padre, Tío) = Abuelo
 *
 * Input: root, p = nodo1, q = nodo2
 * Output: nodo ancestro común
 *
 * @param {Object} root - Raíz del árbol
 * @param {Object} p - Primer nodo
 * @param {Object} q - Segundo nodo
 * @returns {Object} - Nodo LCA
 */

function findLCA(root, p, q) {
  // TODO: Encuentra el ancestro común más bajo
  // Si root es null, return null
  // Si root es p o q, return root
  // Busca en izquierda y derecha
  // Si ambos no son null, return root
  // Si solo uno no es null, return ese
}

// Testing
const tree = {
  val: 'Abuelo',
  left: {
    val: 'Padre',
    left: { val: 'Yo', left: null, right: null },
    right: { val: 'Primo', left: null, right: null }
  },
  right: { val: 'Tío', left: null, right: null }
};

console.log('👪 LCA(YO, Primo):', findLCA(tree, tree.left.left, tree.left.right).val);
// Expected: Padre

console.log('👪 LCA(Padre, Tío):', findLCA(tree, tree.left, tree.right).val);
// Expected: Abuelo

console.log('✅ LCA funcionando correctamente');