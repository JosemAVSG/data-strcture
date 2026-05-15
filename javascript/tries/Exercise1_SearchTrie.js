/**
 * 🔤 EJERCICIO 1: Trie de Búsquedas Recientes
 *
 * CONTEXTO: QuickSearch guarda las búsquedas recientes de cada usuario
 * en un Trie para autocompletado rápido.
 *
 * Estructura del Trie:
 *           (raíz)
 *          / | \
 *        c   p  s
 *        |  |  |
 *       a  h  e
 *       |  |  |
 *       t  o  a
 *       |  |
 *       s  n
 *
 * "cat" -> c -> a -> t (isEnd = true)
 * "phone" -> p -> h -> o -> n -> e
 * "search" -> s -> e -> a -> r -> c -> h
 *
 * Métodos requeridos:
 * - insert(word): agregar búsqueda
 * - search(word): buscar palabra exacta
 * - startsWith(prefix): verificar si hay palabras con prefijo
 */

class TrieNode {
  constructor() {
    this.children = {}; // Mapa de hijos
    this.isEnd = false; // Es fin de palabra
  }
}

class SearchTrie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    // TODO: Inserta palabra caracter por caracter
    // Crea nodos si no existen
    // Al final, marca isEnd = true
  }

  search(word) {
    // TODO: Busca palabra exacta
    // Recorre los nodos
    // Retorna true solo si llega al final y isEnd = true
  }

  startsWith(prefix) {
    // TODO: Verifica si hay alguna palabra que startsWith(prefix)
    // Solo necesita llegar al último nodo del prefijo
  }
}

// Testing
const trie = new SearchTrie();

trie.insert('cat');
trie.insert('phone');
trie.insert('search');
trie.insert('car');

console.log('🔤 search("cat"):', trie.search('cat'));
// Expected: true

console.log('🔤 search("ca"):', trie.search('ca'));
// Expected: false (no es palabra completa)

console.log('🔤 startsWith("ca"):', trie.startsWith('ca'));
// Expected: true (cat y car)

console.log('🔤 startsWith("ph"):', trie.startsWith('ph'));
// Expected: true (phone)

console.log('✅ Trie funcionando');