/**
 * 🚨 EJERCICIO 3: Detector de Ciclos en Rutas
 *
 * CONTEXTO: Hay un bug en el sistema que crea rutas circulares.
 * Un repartidor quedó atrapado en un loop infinito de entregas.
 * Debes detectar si una ruta tiene un ciclo antes de asignarla.
 *
 * Usa el algoritmo de Floyd (tortuga y liebre):
 * - La tortuga avanza de 1 en 1
 * - La liebre avanza de 2 en 2
 * - Si se encuentran, hay un ciclo
 *
 * Input: 1 -> 2 -> 3 -> 4 -> 5 -> 2 (vuelve al nodo 2)
 * Output: true (hay ciclo)
 */

class RouteNode {
  constructor(destination) {
    this.destination = destination;
    this.next = null;
  }
}

function hasCycle(head) {
  // TODO: Implementa el algoritmo de Floyd
  // Si la tortuga y liebre se encuentran, hay ciclo
}

// Testing - Ruta con ciclo (bug)
const routeWithBug = new RouteNode('Calle A');
routeWithBug.next = new RouteNode('Calle B');
routeWithBug.next.next = new RouteNode('Calle C');
routeWithBug.next.next.next = new RouteNode('Calle D');
routeWithBug.next.next.next.next = routeWithBug.next; // Crea ciclo hacia B

console.log('🚨 Ruta con bug - ¿Tiene ciclo?', hasCycle(routeWithBug));
// Expected: true

// Testing - Ruta normal sin ciclo
const normalRoute = new RouteNode('Calle A');
normalRoute.next = new RouteNode('Calle B');
normalRoute.next.next = new RouteNode('Calle C');

console.log('✅ Ruta normal - ¿Tiene ciclo?', hasCycle(normalRoute));
// Expected: false

console.log('✅ Detector de ciclos funcionando');