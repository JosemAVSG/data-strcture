/**
 * Ejercicio 2: Invertir una Lista Enlazada
 *
 * Instrucciones: Implementa una función que invierta una lista enlazada.
 *
 * Ejemplo:
 *   Input: 1 -> 2 -> 3 -> 4 -> 5
 *   Output: 5 -> 4 -> 3 -> 2 -> 1
 */
public class Exercise2_ReverseList {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public static ListNode reverse(ListNode head) {
        // TODO: Implementar
        return null;
    }

    public static void printList(ListNode head) {
        while (head != null) {
            System.out.print(head.val + " -> ");
            head = head.next;
        }
        System.out.println("null");
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head = reverse(head);
        printList(head);
    }
}