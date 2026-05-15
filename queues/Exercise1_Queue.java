/**
 * Ejercicio 1: Implementar una Cola (Queue)
 *
 * Instrucciones: Implementa una clase Queue con los métodos:
 * - enqueue(item): agregar al final
 * - dequeue(): remover y retornar del frente
 * - peek(): ver elemento del frente
 * - isEmpty(): verificar si está vacía
 */
import java.util.*;
public class Exercise1_Queue {
    static class Queue {
        private ArrayList<Integer> items = new ArrayList<>();

        public void enqueue(int item) {
            // TODO: Implementar
        }

        public int dequeue() {
            // TODO: Implementar
            return -1;
        }

        public int peek() {
            // TODO: Implementar
            return -1;
        }

        public boolean isEmpty() {
            // TODO: Implementar
            return true;
        }
    }

    public static void main(String[] args) {
        Queue q = new Queue();
        q.enqueue(10);
        q.enqueue(20);
        System.out.println("Front: " + q.peek());
        System.out.println("Dequeue: " + q.dequeue());
    }
}