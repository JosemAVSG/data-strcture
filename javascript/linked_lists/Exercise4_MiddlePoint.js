/**
 * 📍 EJERCICIO 4: Punto Medio de la Ruta
 *
 * CONTEXTO: Tienes una ruta muy larga y necesitas asignar un segundo
 * repartidor que ayude en la segunda mitad. Encuentra el punto medio.
 *
 * Si hay número par de destinos, devuelve el SEGUNDO del centro.
 * Si hay número impar, devuelve el único centro.
 *
 * Input: A -> B -> C -> D -> E
 * Output: C (el punto medio)
 *
 * Input: A -> B -> C -> D
 * Output: C (segundo del centro)
 *
 * Pista: Usa dos punteros - uno avanza de 1 en 1, otro de 2 en 2
 */

class DestinationNode {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

function findMiddlePoint(head) {
  // TODO: Implementa la búsqueda del nodo medio
  // Cuando el rápido llegue al final, el lento estará en el medio
}

// Testing
const longRoute = new DestinationNode('A');
longRoute.next = new DestinationNode('B');
longRoute.next.next = new DestinationNode('C');
longRoute.next.next.next = new DestinationNode('D');
longRoute.next.next.next.next = new DestinationNode('E');

console.log('📍 Ruta con 5 puntos - Punto medio:', findMiddlePoint(longRoute).name);
// Expected: C

const shortRoute = new DestinationNode('Punto 1');
shortRoute.next = new DestinationNode('Punto 2');
shortRoute.next.next = new DestinationNode('Punto 3');
shortRoute.next.next.next = new DestinationNode('Punto 4');

console.log('📍 Ruta con 4 puntos - Punto medio:', findMiddlePoint(shortRoute).name);
// Expected: Punto 3

console.log('✅ Punto medio encontrado');