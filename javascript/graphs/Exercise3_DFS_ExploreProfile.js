/**
 * 👤 EJERCICIO 3: DFS - Explorar Perfil y Seguidores
 *
 * CONTEXTO: El algoritmo de exploración de perfil usa DFS para
 * recorrer todos los seguidores de seguidores recursivamente.
 *
 * DFS (Depth-First Search): Va profundo antes de explorar primos.
 *
 * Input: Grafo de red social, usuario inicio
 * Output: Lista de todos los usuarios explorados
 *
 * A diferencia de BFS que busca nivel por nivel,
 * DFS va lo más profundo posible antes de volver.
 */

function dfsExploreProfile(graph, startUser) {
  // TODO: Implementa DFS recursivo
  // 1. Set de visitados
  // 2. Array resultado
  // 3. Función recursiva: visit(node)
  //    - Agregar a visitados y resultado
  //    - Para cada vecino, si no visitado, llamar recursivamente
}

// Grafo de prueba
const profileGraph = new Map();
profileGraph.set('UserA', ['UserB', 'UserC']);
profileGraph.set('UserB', ['UserD', 'UserE']);
profileGraph.set('UserC', ['UserF']);
profileGraph.set('UserD', []);
profileGraph.set('UserE', []);
profileGraph.set('UserF', []);

console.log('👤 Explorando desde UserA (DFS):', dfsExploreProfile(profileGraph, 'UserA'));
// Expected: [UserA, UserB, UserD, UserE, UserC, UserF] (orden puede variar)

console.log('✅ DFS funcionando');