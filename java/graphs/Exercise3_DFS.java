/**
 * Ejercicio 3: Recorrido DFS
 *
 * Instrucciones: Implementa el algoritmo DFS (Depth-First Search)
 * para recorrer un grafo desde un vértice inicio.
 *
 * DFS usa recursión o pila.
 */
import java.util.*;
public class Exercise3_DFS {
    public static List<Integer> dfs(Map<Integer, List<Integer>> graph, int start) {
        // TODO: Implementar DFS (recursivo o iterativo)
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        graph.put(1, Arrays.asList(2, 3));
        graph.put(2, Arrays.asList(1, 4));
        graph.put(3, Arrays.asList(1, 4));
        graph.put(4, Arrays.asList(2, 3));

        System.out.println("DFS desde 1: " + dfs(graph, 1));
    }
}