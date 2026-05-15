/**
 * Ejercicio 1: Implementar una Pila (Stack)
 *
 * Instrucciones: Implementa una clase Stack con los métodos:
 * - push(item): agregar elemento
 * - pop(): remover y retornar elemento superior
 * - peek(): ver elemento superior sin remover
 * - isEmpty(): verificar si está vacía
 */
import java.util.*;
public class Exercise1_Stack {
    static class Stack {
        private ArrayList<Integer> items = new ArrayList<>();

        public void push(int item) {
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

        public boolean isEmpty() {
            // TODO: Implementar
            return true;
        }
    }

    public static void main(String[] args) {
        Stack s = new Stack();
        s.push(10);
        s.push(20);
        System.out.println("Top: " + s.peek());
        System.out.println("Pop: " + s.pop());
    }
}