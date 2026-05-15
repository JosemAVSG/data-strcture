/**
 * 🔄 EJERCICIO 3: Invertir Nombre del Plato
 *
 * CONTEXTO: El chef quiere hacer una broma con los nombres de platos.
 * Necesita invertir los nombres de los pedidos para ver qué sale.
 *
 * Input: "MARINARA"
 * Output: "ARANIRAM"
 *
 * Input: "CARBONARA"
 * Output: "ARANOBRAC"
 *
 * @param {string} dishName - Nombre del plato
 * @returns {string} - Nombre invertido
 */
function reverseDishName(dishName) {
  // TODO: Usa una pila para invertir el string
  // Empuja cada carácter a la pila
  // Luego sacarlos para invertir el orden
}

// Testing
console.log('🍝 MARINARA invertida:', reverseDishName('MARINARA'));
// Expected: ARANIRAM

console.log('🍕 PEPERONI invertida:', reverseDishName('PEPERONI'));
// Expected: INOREPEP

console.log('🥗 ENSALADA invertida:', reverseDishName('ENSALADA'));
// Expected: ADALASNE

console.log('✅ Nombres invertidos correctamente');