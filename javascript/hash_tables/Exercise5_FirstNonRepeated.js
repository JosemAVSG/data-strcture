/**
 * ✨ EJERCICIO 5: Primer Carácter No Repetido
 *
 * CONTEXTO: En el sistema de analytics, necesitas encontrar
 * el primer carácter que aparece una sola vez en una字符串.
 *
 * Input: "swiss" -> "w" (s aparece 3 veces, w aparece 1 vez)
 * Input: "love" -> "l" (todos aparecen 1 vez, el primero es l)
 * Input: "aabb" -> null (todos se repiten)
 *
 * @param {string} str - Cadena de caracteres
 * @returns {string} - Primer carácter sin repetir, o null
 */
function firstNonRepeatedChar(str) {
  // TODO: Usa un Map para contar frecuencias
  // Luego recorre la cadena de nuevo buscando el primero con freq = 1
}

// Testing
console.log('✨ "swiss":', firstNonRepeatedChar('swiss'));
// Expected: w

console.log('✨ "love":', firstNonRepeatedChar('love'));
// Expected: l

console.log('✨ "aabb":', firstNonRepeatedChar('aabb'));
// Expected: null

console.log('✨ "abcab":', firstNonRepeatedChar('abcab'));
// Expected: c

console.log('✅ Primer no repetido funcionando');