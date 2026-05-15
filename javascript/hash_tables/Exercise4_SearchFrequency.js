/**
 * 🔎 EJERCICIO 4: Contar Frecuencia de Búsquedas
 *
 * CONTEXTO: El sistema analiza las búsquedas más frecuentes
 * para mejorar las sugerencias automáticas.
 *
 * Input: ["perro", "gato", "perro", "pez", "gato", "perro"]
 * Output: { perro: 3, gato: 2, pez: 1 }
 *
 * @param {string[]} searches - Array de términos de búsqueda
 * @returns {Object} - Frecuencia de cada término
 */
function countSearchFrequency(searches) {
  // TODO: Usa un Map o objeto para contar
  // Por cada búsqueda, incrementa el contador
}

// Testing
const searchHistory = ['perro', 'gato', 'perro', 'pez', 'gato', 'perro'];

console.log('🔍 Frecuencia de búsquedas:', countSearchFrequency(searchHistory));
// Expected: { perro: 3, gato: 2, pez: 1 }

// Encontrar el más buscado
function mostFrequent(searches) {
  const freq = countSearchFrequency(searches);
  // TODO: Encuentra el término con mayor frecuencia
  return '';
}

console.log('⭐ Más buscado:', mostFrequent(searchHistory));
// Expected: perro

console.log('✅ Frecuencia funcionando');