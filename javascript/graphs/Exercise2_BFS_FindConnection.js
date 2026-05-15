/**
 * 🔍 EJERCICIO 2: BFS - Encontrar Conexión en Red
 *
 * CONTEXTO: Un usuario quiere saber si existe alguien en su red
 * de contactos (amigos de amigos) que pueda presentarle a alguien.
 *
 * BFS (Breadth-First Search): Busca nivel por nivel.
 *
 * Input: Red social, usuario inicio, objetivo
 * Output: Boolean - ¿existe conexión?
 *
 * Estructura del grafo:
 * Alice -> Bob, Charlie
 * Bob -> David
 * Charlie -> David
 *
 * BFS desde Alice buscando a David = true (encontrado en nivel 2)
 */

function bfsFindConnection(graph, startUser, targetUser) {
  // TODO: Implementa BFS
  // 1. Cola con usuario inicio
  // 2. Set de visitados
  // 3. Mientras cola no vacía:
  //    - Sacar usuario
  //    - Si es el objetivo, return true
  //    - Agregar vecinos no visitados a la cola
  // 4. Return false si no se encontró
}

// Grafo de prueba (usando Map)
const socialNetwork = new Map();
socialNetwork.set('Alice', ['Bob', 'Charlie']);
socialNetwork.set('Bob', ['David']);
socialNetwork.set('Charlie', ['David']);
socialNetwork.set('David', []);

console.log('🔍 Alice -> David (BFS):', bfsFindConnection(socialNetwork, 'Alice', 'David'));
// Expected: true

console.log('🔍 Alice -> Eve (BFS):', bfsFindConnection(socialNetwork, 'Alice', 'Eve'));
// Expected: false

console.log('✅ BFS funcionando');