/**
 * Ejercicio 3: Tabla Hash con Direccionamiento Abierto
 *
 * Instrucciones: Maneja colisiones usando Linear Probing.
 * Si un bucket está ocupado, busca el siguiente libre.
 */
public class Exercise3_OpenAddressing {
    private int[] table;
    private int size;
    private final int EMPTY = -1;

    public Exercise3_OpenAddressing(int capacity) {
        // TODO: Inicializar tabla
    }

    public void insert(int value) {
        // TODO: Linear probing para插入
    }

    public boolean search(int value) {
        // TODO: Buscar con probing
        return false;
    }

    public void delete(int value) {
        // TODO: Eliminar (marcar como especial o reorganizar)
    }

    public static void main(String[] args) {
        Exercise3_OpenAddressing oa = new Exercise3_OpenAddressing(10);
        oa.insert(5);
        oa.insert(15);
        System.out.println("Busca 5: " + oa.search(5));
    }
}