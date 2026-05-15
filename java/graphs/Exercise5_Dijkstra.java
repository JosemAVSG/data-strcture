/**
 * Ejercicio 5: Algoritmo de Dijkstra
 *
 * Instrucciones: Implementa el algoritmo de Dijkstra para encontrar
 * el camino más corto desde un vértice inicio a todos los demás.
 *
 * Input: grafo con pesos en las aristas
 * Output: distancia mínima a cada vértice
 */
import java.util.*;
public class Exercise5_Dijkstra {
    public static Map<Integer, Integer> dijkstra(
            Map<Integer, List<int[]>> graph, int start) {
        // TODO: Implementar Dijkstra
        // graph: vertice -> [(vecino, peso), ...]
        return new HashMap<>();
    }

    public static void main(String[] args) {
        Map<Integer, List<int[]>> graph = new HashMap<>();
        graph.put(1, Arrays.asList(new int[]{2, 4}, new int[]{3, 2}));
        graph.put(2, Arrays.asList(new int[]{1, 4}, new int[]{3, 1}, new int[]{4, 5}));
        graph.put(3, Arrays.asList(new int[]{1, 2}, new int[]{2, 1}, new int[]{4, 8}));
        graph.put(4, Arrays.asList(new int[]{2, 5}, new int[]{3, 8}));

        System.out.println("Dijkstra desde 1: " + dijkstra(graph, 1));
    }
}