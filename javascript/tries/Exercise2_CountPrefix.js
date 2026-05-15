/**
 * 📊 EJERCICIO 2: Contar Búsquedas con Prefijo
 *
 * CONTEXTO: El sistema analytics necesita saber cuántas búsquedas
 * empiezan con un certain prefijo para mostrar estadísticas.
 *
 * Input: ["apple", "apply", "app", "apt", "application"]
 * Prefijo "app" -> 3 (apple, apply, app)
 * Prefijo "ap" -> 4 (apple, apply, app, apt)
 * Prefijo "a" -> 5 (todas)
 *
 * @param {string[]} words - Lista de palabras
 * @param {string} prefix - Prefijo a buscar
 * @returns {number} - Cantidad de palabras con ese prefijo
 */
function countWordsWithPrefix(words, prefix) {
  // TODO: Implementa un Trie y cuenta palabras con prefijo
  // O(n) simple puede funcionar, pero el ejercicio es practicar tries
  // Hint: Inserta todas las palabras, luego recorre hasta el prefijo
  // y cuenta cuántos nodos hijos tienen isEnd = true
}

// Versión simple sin trie
function countWordsSimple(words, prefix) {
  // TODO: Versión simple - cuenta directamente
  return words.filter(w => w.startsWith(prefix)).length;
}

// Testing
const searches = ['apple', 'apply', 'app', 'apt', 'application'];

console.log('📊 "app":', countWordsSimple(searches, 'app'));
// Expected: 3

console.log('📊 "ap":', countWordsSimple(searches, 'ap'));
// Expected: 4

console.log('📊 "application":', countWordsSimple(searches, 'application'));
// Expected: 1

console.log('✅ Contador funcionando');