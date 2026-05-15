/**
 * 👥 EJERCICIO 1: Grafo de Conexiones de Amigos
 *
 * CONTEXTO: ConnectAll usa grafos para representar conexiones.
 * Cada usuario es un nodo, cada seguimiento es una arista dirigida.
 *
 * Usa lista de adyacencia: cada usuario tiene una lista de a quienes sigue.
 *
 * Métodos:
 * - addUser(userId): agregar usuario
 * - addFollow(follower, following): agregar seguimiento
 * - getFollowers(userId): obtener seguidores de un usuario
 * - printNetwork(): mostrar toda la red
 */

class SocialGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addUser(userId) {
    // TODO: Agrega usuario si no existe
  }

  addFollow(follower, following) {
    // TODO: follower sigue a following
    // Agregar al adjacencyList
  }

  getFollowers(userId) {
    // TODO: Obtiene lista de seguidores
  }

  printNetwork() {
    // TODO: Imprime toda la red
    for (let [user, follows] of this.adjacencyList) {
      console.log(`${user} sigue a: ${[...follows].join(', ')}`);
    }
  }
}

// Testing
const social = new SocialGraph();

social.addUser('Alice');
social.addUser('Bob');
social.addUser('Charlie');
social.addUser('David');

social.addFollow('Alice', 'Bob');
social.addFollow('Alice', 'Charlie');
social.addFollow('Bob', 'David');
social.addFollow('Charlie', 'David');

console.log('👥 Red social:');
social.printNetwork();

// Alice sigue a: Bob, Charlie
// Bob sigue a: David
// Charlie sigue a: David

console.log('✅ Grafo social funcionando');