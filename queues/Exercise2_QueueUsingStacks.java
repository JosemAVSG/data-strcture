/**
 * Ejercicio 2: Implementar Cola usando dos Pilas
 *
 * Instrucciones: Implementa una cola usando dos pilas.
 * La cola debe soportar: push, pop, peek, empty
 */
import java.util.*;
public class Exercise2_QueueUsingStacks {
    static class QueueWithStacks {
        Stack<Integer> inStack = new Stack<>();
        Stack<Integer> outStack = new Stack<>();

        public void push(int x) {
            // TODO: Implementar
        }

        public int pop() {
            // TODO: Implementar
            return -1;
        }

        public int peek() {
            // TODO: Implementar
            return -1;
        }

        public boolean empty() {
            // TODO: Implementar
            return true;
        }
    }

    public static void main(String[] args) {
        QueueWithStacks queue = new QueueWithStacks();
        queue.push(1);
        queue.push(2);
        System.out.println("Front: " + queue.peek());
        System.out.println("Pop: " + queue.pop());
    }
}