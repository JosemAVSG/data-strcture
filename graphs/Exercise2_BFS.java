/**
 * Ejercicio 2: Recorrido BFS
 *
 * Instrucciones: Implementa el algoritmo BFS (Breadth-First Search)
 * para recorrer un grafo desde un vértice inicio.
 *
 * BFS usa una cola y marca vértices visitados.
 */
import java.util.*;
public class Exercise2_BFS {
    public static List<Integer> bfs(Map<Integer, List<Integer>> graph, int start) {
        // TODO: Implementar BFS
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        graph.put(1, Arrays.asList(2, 3));
        graph.put(2, Arrays.asList(1, 4));
        graph.put(3, Arrays.asList(1, 4));
        graph.put(4, Arrays.asList(2, 3));

        System.out.println("BFS desde 1: " + bfs(graph, 1));
    }
}