/**
 * Ejercicio 2: Construir Heap desde Arreglo
 *
 * Instrucciones: Implementa una función que construya un heap
 * (max heap o min heap) a partir de un arreglo.
 *
 * Usa el algoritmo de "heapify" desde el último nodo no-hoja.
 */
public class Exercise2_BuildHeap {
    public static void buildHeap(int[] arr) {
        // TODO: Implementar build heap (O(n))
    }

    private static void heapify(int[] arr, int n, int i) {
        // TODO: Helper para heapify
    }

    public static void main(String[] args) {
        int[] arr = {4, 10, 3, 5, 1};
        buildHeap(arr);
        System.out.print("Heap: ");
        for (int x : arr) System.out.print(x + " ");
    }
}