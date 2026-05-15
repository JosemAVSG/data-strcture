/**
 * ⭐ EJERCICIO 5: Dijkstra - Encontrar Camino Más Corto
 *
 * CONTEXTO: El sistema de "sugerir amigos" usa Dijkstra para encontrar
 * la distancia más corta entre dos usuarios.
 * La "distancia" es el número de saltos entre usuarios.
 *
 * Input: Grafo con pesos, usuario inicio
 * Output: Mapa de distancias mínimas a cada usuario
 *
 * Ejemplo:
 * Alice --1--> Bob --1--> Charlie --1--> David
 * Alice --2--> Charlie
 * Distancia mínima Alice->David = 2 (Alice->Bob->Charlie->David)
 * PERO también Alice->Charlie directa = 2
 * La más corta sería por la directa
 */

function dijkstraShortestPath(graph, startUser) {
  // TODO: Implementa Dijkstra
  // 1. Distancias: Map con infinito excepto inicio = 0
  // 2. Cola de prioridad (puede ser array simple)
  // 3. Mientras cola no vacía:
  //    - Sacar nodo con menor distancia
  //    - Para cada vecino: nuevaDist = actual + peso
  //    - Si nuevaDist < distancia[vecino], actualizar
  // 4. Retornar distancias
}

// Grafo con pesos (número de saltos)
const weightedGraph = new Map();
weightedGraph.set('Alice', [['Bob', 1], ['Charlie', 2]]);
weightedGraph.set('Bob', [['David', 1]]);
weightedGraph.set('Charlie', [['David', 1]]);
weightedGraph.set('David', []);

console.log('⭐ Dijkstra desde Alice:', dijkstraShortestPath(weightedGraph, 'Alice'));
// Expected: {Alice: 0, Bob: 1, Charlie: 2, David: 2}
// (Alice->Bob->David = 2, Alice->Charlie->David = 2)

console.log('✅ Dijkstra funcionando');