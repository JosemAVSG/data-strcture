/**
 * 🗑️ EJERCICIO 3: Eliminar Búsqueda del Historial
 *
 * CONTEXTO: El usuario quiere eliminar una búsqueda reciente
 * del historial de autocompletado.
 *
 * Importante: Si al eliminar una palabra quedan nodos sin hijos
 * (que solo servían para esa palabra), también elimínalos para
 * ahorrar memoria.
 *
 * Input: Trie con ["apple", "app"]
 * Delete("apple")
 * Resultado: Solo queda "app"
 *
 * @param {Object} trie - El trie con las palabras
 * @param {string} word - Palabra a eliminar
 */
class DeletableTrie {
  constructor() {
    this.root = { children: {}, isEnd: false };
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = { children: {}, isEnd: false };
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }

  delete(word) {
    // TODO: Implementa eliminación
    // 1. Recorre hasta el final de la palabra
    // 2. Marca isEnd = false
    // 3. Recursivamente elimina nodos que no tienen hijos y no son fin de palabra
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEnd;
  }
}

// Testing
const trie = new DeletableTrie();
trie.insert('apple');
trie.insert('app');

console.log('🗑️ Busca apple antes:', trie.search('apple'));
// Expected: true

trie.delete('apple');

console.log('🗑️ Busca apple después:', trie.search('apple'));
// Expected: false

console.log('🗑️ Busca app después:', trie.search('app'));
// Expected: true (app sigue ahí)

console.log('✅ Eliminación funcionando');