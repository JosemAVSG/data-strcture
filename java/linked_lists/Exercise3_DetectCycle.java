/**
 * Ejercicio 3: Detectar Ciclo en Lista Enlazada
 *
 * Instrucciones: Implementa una función que detecte si hay un ciclo
 * en una lista enlazada (algoritmo de Floyd - tortoise and hare).
 *
 * Ejemplo:
 *   Input: 1 -> 2 -> 3 -> 4 (y 4 apunta a 2)
 *   Output: true
 */
public class Exercise3_DetectCycle {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public static boolean hasCycle(ListNode head) {
        // TODO: Implementar algoritmo de Floyd
        return false;
    }

    public static void main(String[] args) {
        // Crear lista con ciclo
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = head.next; // forma ciclo

        System.out.println("Tiene ciclo: " + hasCycle(head));
    }
}