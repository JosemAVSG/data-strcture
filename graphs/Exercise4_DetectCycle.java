/**
 * Ejercicio 4: Detectar Ciclos en Grafo No Dirigido
 *
 * Instrucciones: Implementa una función que detecte si hay un ciclo
 * en un grafo no dirigido.
 *
 * Pista: Usa DFS con tracking de padre.
 */
import java.util.*;
public class Exercise4_DetectCycle {
    public static boolean hasCycle(Map<Integer, List<Integer>> graph) {
        // TODO: Implementar detección de ciclos
        return false;
    }

    public static void main(String[] args) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        graph.put(1, Arrays.asList(2));
        graph.put(2, Arrays.asList(1, 3));
        graph.put(3, Arrays.asList(2, 1)); // ciclo: 1-2-3-1

        System.out.println("Tiene ciclo: " + hasCycle(graph));
    }
}