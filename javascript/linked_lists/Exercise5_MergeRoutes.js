/**
 * 🛣️ EJERCICIO 5: Fusionar Rutas Ordenadas
 *
 * CONTEXTO: Tienes dos rutas de entrega ya optimizadas (ordenadas
 * por distancia desde el almacén). Debes fusionarlas en una sola
 * ruta ordenada para evitar repeticiones.
 *
 * Input:
 *   Ruta A: 1km -> 3km -> 5km
 *   Ruta B: 2km -> 4km -> 6km
 * Output: 1km -> 2km -> 3km -> 4km -> 5km -> 6km
 */

class DeliveryPoint {
  constructor(distance) {
    this.distance = distance;
    this.next = null;
  }
}

function mergeSortedRoutes(route1, route2) {
  // TODO: Fusiona dos listas ordenadas en una
  // Pista: Compara los primeros elementos de cada lista
  // y elige el menor para agregar a la resultado
}

// Crear rutas de prueba
function createRoute(distances) {
  if (!distances.length) return null;
  const head = new DeliveryPoint(distances[0]);
  let current = head;
  for (let i = 1; i < distances.length; i++) {
    current.next = new DeliveryPoint(distances[i]);
    current = current.next;
  }
  return head;
}

function printRoute(node) {
  const distances = [];
  while (node) {
    distances.push(node.distance + 'km');
    node = node.next;
  }
  return distances.join(' -> ');
}

const routeA = createRoute([1, 3, 5]);
const routeB = createRoute([2, 4, 6]);

console.log('🛣️ Ruta A:', printRoute(routeA));
console.log('🛣️ Ruta B:', printRoute(routeB));

const merged = mergeSortedRoutes(routeA, routeB);
console.log('🔗 Ruta fusionada:', printRoute(merged));
// Expected: 1km -> 2km -> 3km -> 4km -> 5km -> 6km

console.log('✅ Rutas fusionadas correctamente');