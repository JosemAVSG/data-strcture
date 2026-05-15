/**
 * Ejercicio 4: K Elementos Más Grandes
 *
 * Instrucciones: Encuentra los k elementos más grandes en un arreglo
 * usando un min-heap de tamaño k.
 *
 * Complejidad: O(n log k)
 */
import java.util.*;
public class Exercise4_KLargestElements {
    public static List<Integer> findKLargest(int[] arr, int k) {
        // TODO: Implementar usando PriorityQueue (min-heap)
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        int[] arr = {3, 2, 1, 5, 6, 4};
        System.out.println("K=2 más grandes: " + findKLargest(arr, 2));
    }
}