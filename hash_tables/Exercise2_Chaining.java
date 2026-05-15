/**
 * Ejercicio 2: Tabla Hash con Encadenamiento (Chaining)
 *
 * Instrucciones: Maneja colisiones usando listas enlazadas.
 * Cada bucket contiene una lista de elementos.
 */
import java.util.*;
public class Exercise2_Chaining {
    private List<Integer>[] table;
    private int size;

    public Exercise2_Chaining(int capacity) {
        // TODO: Inicializar tabla de listas
    }

    public void insert(int value) {
        // TODO: Hashear y agregar a la lista
    }

    public boolean search(int value) {
        // TODO: Buscar en la lista del bucket
        return false;
    }

    public void delete(int value) {
        // TODO: Eliminar de la lista
    }

    public static void main(String[] args) {
        Exercise2_Chaining ch = new Exercise2_Chaining(5);
        ch.insert(10);
        ch.insert(15); // colisión posible
        System.out.println("Busca 10: " + ch.search(10));
    }
}