/**
 * Ejercicio 1: Lista Enlazada Simple
 *
 * Instrucciones: Implementa una clase LinkedList con métodos para:
 * - insertAtBeginning(value): insertar al inicio
 * - insertAtEnd(value): insertar al final
 * - delete(value): eliminar nodo por valor
 * - print(): imprimir la lista
 */
public class Exercise1_LinkedList {
    static class Node {
        int data;
        Node next;
        Node(int data) { this.data = data; }
    }

    Node head;

    public void insertAtBeginning(int value) {
        // TODO: Implementar
    }

    public void insertAtEnd(int value) {
        // TODO: Implementar
    }

    public void delete(int value) {
        // TODO: Implementar
    }

    public void print() {
        // TODO: Implementar
    }

    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.insertAtEnd(1);
        list.insertAtEnd(2);
        list.insertAtBeginning(0);
        list.print();
    }
}