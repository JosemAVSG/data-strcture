/**
 * Ejercicio 3: Cola de Impresión con Prioridades
 *
 * Instrucciones: Implementa una cola de impresión donde los documentos
 * tienen prioridad (1 = alta, 3 = baja). Los de mayor prioridad
 * se imprimen primero.
 */
import java.util.*;
public class Exercise3_PrintQueue {
    static class Document {
        String name;
        int priority;
        Document(String name, int priority) {
            this.name = name;
            this.priority = priority;
        }
    }

    static class PrintQueue {
        PriorityQueue<Document> queue;

        public PrintQueue() {
            // TODO: Inicializar con comparador por prioridad
        }

        public void addDocument(String name, int priority) {
            // TODO: Implementar
        }

        public Document print() {
            // TODO: Implementar
            return null;
        }
    }

    public static void main(String[] args) {
        PrintQueue pq = new PrintQueue();
        pq.addDocument("A", 2);
        pq.addDocument("B", 1); // alta prioridad
        pq.addDocument("C", 3);
        System.out.println("Imprimiendo: " + pq.print().name);
    }
}