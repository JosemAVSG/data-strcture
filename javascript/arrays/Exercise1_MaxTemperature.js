/**
 * 🏭 EJERCICIO 1: Control de Temperatura del Horno
 *
 * CONTEXTO: Trabajas en una fábrica de componentes electrónicos.
 * Los hornos de soldadura deben mantenerse entre 180°C y 220°C.
 * El supervisor necesita verificar que ningún ciclo haya superado los 230°C.
 *
 * Input: [185, 192, 178, 215, 190, 225, 188, 195, 210, 205]
 * Output: 225
 *
 * @param {number[]} readings - Lecturas de temperatura de los últimos ciclos
 * @returns {number} - Temperatura máxima registrada
 */
function findMaxTemperature(readings) {
  // TODO: Encuentra la temperatura máxima
  // Pista: Recorre el array y mantén el valor más alto
}

// Testing
const temperatureReadings = [185, 192, 178, 215, 190, 225, 188, 195, 210, 205];
console.log('🔔 Temperatura máxima:', findMaxTemperature(temperatureReadings));

// Casos de prueba
console.assert(findMaxTemperature([185, 192, 178, 215, 190]) === 215, 'Test 1 failed');
console.assert(findMaxTemperature([100, 200, 300]) === 300, 'Test 2 failed');
console.assert(findMaxTemperature([-10, -5, -20]) === -5, 'Test 3 failed');

console.log('✅ Todos los tests pasaron');