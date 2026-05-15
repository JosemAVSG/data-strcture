/**
 * Ejercicio 4: Encontrar el Nodo Medio
 *
 * Instrucciones: Implementa una función que encuentre el nodo medio
 * de una lista enlazada. Si hay dos nodos medios, devuelve el segundo.
 *
 * Ejemplo:
 *   Input: 1 -> 2 -> 3 -> 4 -> 5
 *   Output: Nodo con valor 3
 */
public class Exercise4_MiddleNode {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public static ListNode middleNode(ListNode head) {
        // TODO: Implementar (usa dos punteros: lento y rápido)
        return null;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);

        ListNode middle = middleNode(head);
        System.out.println("Nodo medio: " + middle.val);
    }
}