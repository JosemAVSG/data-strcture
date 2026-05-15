/**
 * 📏 EJERCICIO 2: Altura del Árbol Familiar
 *
 * CONTEXTO: El cliente quiere saber cuántas "generaciones" tiene su
 * familia. La altura es el número de nodos en el camino más largo
 * desde la raíz hasta una hoja.
 *
 *       Abuelo (nivel 1)
 *      /
 *   Padre (nivel 2)
 *   /
 * Hijo (nivel 3)
 *
 * Altura = 3 niveles
 *
 * @param {Object} root - Nodo raíz del árbol
 * @returns {number} - Altura del árbol
 */
function getFamilyHeight(root) {
  // TODO: Calcula la altura recursivamente
  // Si el nodo es null, altura = 0
  // Altura = 1 + max(altura izquierda, altura derecha)
}

// Testing
const familyTree = {
  name: 'Abuelo',
  left: {
    name: 'Padre',
    left: {
      name: 'Hijo',
      left: null,
      right: null
    },
    right: null
  },
  right: {
    name: 'Tía',
    left: null,
    right: null
  }
};

console.log('📏 Altura de la familia:', getFamilyHeight(familyTree));
// Expected: 3 (Abuelo -> Padre -> Hijo)

// Caso más profundo
const deepTree = {
  name: '1',
  left: { name: '2', left: { name: '3', left: null, right: null }, right: null },
  right: null
};

console.log('📏 Árbol profundo:', getFamilyHeight(deepTree));
// Expected: 3

console.log('✅ Altura calculada correctamente');