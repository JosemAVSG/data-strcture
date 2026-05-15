/**
 * Ejercicio 5: Cola de Prioridad
 *
 * Instrucciones: Implementa una cola de prioridad usando heap.
 * Soporta: enqueue con prioridad, dequeue (saca el de mayor prioridad)
 */
public class Exercise5_PriorityQueue {
    private class Node {
        int value;
        int priority;
        Node(int v, int p) { value = v; priority = p; }
    }

    private Node[] heap;
    private int size;

    public Exercise5_PriorityQueue(int capacity) {
        // TODO: Inicializar
    }

    public void enqueue(int value, int priority) {
        // TODO: Insertar con prioridad
    }

    public int dequeue() {
        // TODO: Sacar elemento de mayor prioridad
        return -1;
    }

    public static void main(String[] args) {
        Exercise5_PriorityQueue pq = new Exercise5_PriorityQueue(10);
        pq.enqueue("A", 1);
        pq.enqueue("B", 3);
        pq.enqueue("C", 2);
    }
}