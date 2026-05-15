/**
 * 💡 EJERCICIO 4: Sugerencias de Búsqueda
 *
 * CONTEXTO: El usuario escribe un prefijo y el sistema debe
 * mostrar TODAS las búsquedas que empiezan con ese prefijo.
 *
 * Input: ["dog", "doom", "dark", "duck", "donkey"]
 * Prefijo "do" -> ["dog", "doom", "donkey"]
 * Prefijo "d" -> ["dog", "doom", "dark", "duck", "donkey"]
 *
 * @param {string[]} words - Palabras en el sistema
 * @param {string} prefix - Prefijo del usuario
 * @returns {string[]} - Lista de sugerencias
 */
class SuggestionTrie {
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

  getSuggestions(prefix) {
    // TODO: Implementa sugerencias
    // 1. Navega hasta el nodo del prefijo
    // 2. Desde ahí, recopila TODAS las palabras posibles
    //    (recursivamente busca todos los isEnd = true)
    return [];
  }
}

// Testing
const suggestions = new SuggestionTrie();
['dog', 'doom', 'dark', 'duck', 'donkey'].forEach(w => suggestions.insert(w));

console.log('💡 Sugerencias para "do":', suggestions.getSuggestions('do'));
// Expected: ["dog", "doom", "donkey"]

console.log('💡 Sugerencias para "d":', suggestions.getSuggestions('d'));
// Expected: ["dog", "doom", "dark", "duck", "donkey"]

console.log('💡 Sugerencias para "duck":', suggestions.getSuggestions('duck'));
// Expected: ["duck"]

console.log('✅ Sugerencias funcionando');