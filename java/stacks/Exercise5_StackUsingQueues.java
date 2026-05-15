/**
 * Ejercicio 5: Implementar Pila usando dos Colas
 *
 * Instrucciones: Implementa una pila usando dos colas.
 * La pila debe soportar: push, pop, top, empty
 */
import java.util.*;
public class Exercise5_StackUsingQueues {
    static class StackWithQueues {
        Queue<Integer> q1 = new LinkedList<>();
        Queue<Integer> q2 = new LinkedList<>();

        public void push(int x) {
            // TODO: Implementar
        }

        public int pop() {
            // TODO: Implementar
            return -1;
        }

        public int top() {
            // TODO: Implementar
            return -1;
        }

        public boolean empty() {
            // TODO: Implementar
            return true;
        }
    }

    public static void main(String[] args) {
        StackWithQueues stack = new StackWithQueues();
        stack.push(1);
        stack.push(2);
        System.out.println("Top: " + stack.top());
        System.out.println("Pop: " + stack.pop());
    }
}