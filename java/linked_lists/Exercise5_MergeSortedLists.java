/**
 * Ejercicio 5: Fusionar Dos Listas Ordenadas
 *
 * Instrucciones: Implementa una función que fusione dos listas enlazadas
 * ordenadas en una sola lista ordenada.
 *
 * Ejemplo:
 *   Input: 1 -> 2 -> 4, 1 -> 3 -> 4
 *   Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4
 */
public class Exercise5_MergeSortedLists {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {
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
        ListNode l1 = new ListNode(1);
        l1.next = new ListNode(2);
        l1.next.next = new ListNode(4);

        ListNode l2 = new ListNode(1);
        l2.next = new ListNode(3);
        l2.next.next = new ListNode(4);

        ListNode merged = mergeTwoLists(l1, l2);
        printList(merged);
    }
}