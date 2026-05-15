/**
 * 👨‍👩‍👧 EJERCICIO 1: Árbol Genealógico Familiar
 *
 * CONTEXTO: GeneTech mapea árboles genealógicos. Cada nodo representa
 * una persona con referencias a sus hijos (izquierdo = hijo mayor,
 * derecho = hijo menor, o viceversa).
 *
 * Implementa un BinaryTree con:
 * - insert(name): agregar miembro a la familia
 * - preorder(): recorrido preorden (padre antes que hijos)
 * - inorder(): recorrido inorden (izquierda - padre - derecha)
 * - postorder(): recorrido postorden (hijos antes que padre)
 *
 * Estructura:
 *       Abuelo
 *      /      \
 *   Padre    Tío
 *   /
 * Hijo
 */

class FamilyNode {
  constructor(name) {
    this.name = name;
    this.left = null;
    this.right = null;
  }
}

class FamilyTree {
  constructor() {
    this.root = null;
  }

  insert(name) {
    // TODO: Inserta un nuevo miembro (puede ser simple, inserción al final)
  }

  // Padre -> Hijos
  preorder(node = this.root) {
    if (!node) return [];
    // TODO: Implementa preorden [root, left, right]
    return [];
  }

  // Izquierda -> Padre -> Derecha
  inorder(node = this.root) {
    if (!node) return [];
    // TODO: Implementa inorden [left, root, right]
    return [];
  }

  // Hijos -> Padre
  postorder(node = this.root) {
    if (!node) return [];
    // TODO: Implementa postorden [left, right, root]
    return [];
  }
}

// Testing
const tree = new FamilyTree();
tree.root = new FamilyNode('Abuelo');
tree.root.left = new FamilyNode('Padre');
tree.root.right = new FamilyNode('Tío');
tree.root.left.left = new FamilyNode('Hijo');

console.log('🌳 Preorden (padre primero):', tree.preorder());
// Expected: ["Abuelo", "Padre", "Hijo", "Tío"]

console.log('🌳 Inorden:', tree.inorder());
// Expected: ["Hijo", "Padre", "Abuelo", "Tío"]

console.log('🌳 Postorden (hijos primero):', tree.postorder());
// Expected: ["Hijo", "Padre", "Tío", "Abuelo"]

console.log('✅ Árbol genealógico funcionando');