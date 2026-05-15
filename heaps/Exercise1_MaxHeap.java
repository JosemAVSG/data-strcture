/**
 * Ejercicio 1: Montículo Máximo (Max Heap)
 *
 * Instrucciones: Implementa un Max Heap con:
 * - insert(value): insertar elemento
 * - extractMax(): extraer máximo
 * - peek(): ver máximo sin extraer
 * - heapify(): reconstruir heap
 */
public class Exercise1_MaxHeap {
    private int[] heap;
    private int size;

    public Exercise1_MaxHeap(int capacity) {
        // TODO: Inicializar heap
    }

    public void insert(int value) {
        // TODO: Insertar y heapify up
    }

    public int extractMax() {
        // TODO: Remover y devolver máximo, heapify down
        return -1;
    }

    public int peek() {
        // TODO: Ver máximo
        return -1;
    }

    private void heapifyUp(int index) {
        // TODO: Flotar elemento hacia arriba
    }

    private void heapifyDown(int index) {
        // TODO: Hundir elemento hacia abajo
    }

    public static void main(String[] args) {
        Exercise1_MaxHeap heap = new Exercise1_MaxHeap(10);
        heap.insert(10);
        heap.insert(20);
        heap.insert(5);
        System.out.println("Max: " + heap.extractMax());
    }
}