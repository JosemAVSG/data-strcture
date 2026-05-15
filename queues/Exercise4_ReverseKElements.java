/**
 * Ejercicio 4: Invertir Primeros K Elementos
 *
 * Instrucciones: Implementa una función que invierta los primeros k
 * elementos de una cola.
 *
 * Ejemplo:
 *   Input: queue = [1,2,3,4,5], k = 3
 *   Output: [3,2,1,4,5]
 */
import java.util.*;
public class Exercise4_ReverseKElements {
    public static Queue<Integer> reverseFirstK(Queue<Integer> q, int k) {
        // TODO: Implementar
        return q;
    }

    public static void main(String[] args) {
        Queue<Integer> q = new LinkedList<>();
        q.add(1); q.add(2); q.add(3); q.add(4); q.add(5);
        q = reverseFirstK(q, 3);
        System.out.println("Cola invertida: " + q);
    }
}