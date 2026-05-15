/**
 * Ejercicio 1: Grafo con Lista de Adyacencia
 *
 * Instrucciones: Implementa una clase Graph con:
 * - addVertex(v): agregar vértice
 * - addEdge(v1, v2): agregar arista (no dirigida)
 * - print(): imprimir grafo
 */
import java.util.*;
public class Exercise1_Graph {
    private Map<Integer, List<Integer>> adjacencyList;

    public Graph() {
        // TODO: Inicializar
    }

    public void addVertex(int v) {
        // TODO: Implementar
    }

    public void addEdge(int v1, int v2) {
        // TODO: Implementar (grafo no dirigido)
    }

    public void print() {
        // TODO: Implementar
    }

    public static void main(String[] args) {
        Graph g = new Graph();
        g.addVertex(1);
        g.addVertex(2);
        g.addVertex(3);
        g.addEdge(1, 2);
        g.addEdge(2, 3);
        g.print();
    }
}