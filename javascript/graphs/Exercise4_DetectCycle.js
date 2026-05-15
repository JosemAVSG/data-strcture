/**
 * 🔄 EJERCICIO 4: Detectar Ciclos en Following
 *
 * CONTEXTO: Hay un bug en el sistema que permite crear ciclos
 * de follows (A sigue a B, B sigue a C, C sigue a A).
 * Esto causa problemas en el feed de noticias.
 *
 * Detecta si hay un ciclo en las relaciones de seguimiento.
 *
 * Input: Grafo dirigido de follows
 * Output: Boolean - ¿existe ciclo?
 *
 * Ejemplo con ciclo:
 * Alice -> Bob -> Charlie -> Alice
 */

function detectFollowCycle(graph) {
  // TODO: Implementa detección de ciclos en grafo dirigido
  // Usa DFS con tres estados: white (no visitado), gray (en progreso), black (completado)
  // Si visitas un nodo gray, hay ciclo
}

// Grafo SIN ciclo
const noCycleGraph = new Map();
noCycleGraph.set('A', ['B']);
noCycleGraph.set('B', ['C']);
noCycleGraph.set('C', []);

console.log('🔄 Grafo sin ciclo:', detectFollowCycle(noCycleGraph));
// Expected: false

// Grafo CON ciclo
const cycleGraph = new Map();
cycleGraph.set('A', ['B']);
cycleGraph.set('B', ['C']);
cycleGraph.set('C', ['A']); // C sigue a A = ciclo

console.log('🔄 Grafo con ciclo:', detectFollowCycle(cycleGraph));
// Expected: true

console.log('✅ Detección de ciclos funcionando');