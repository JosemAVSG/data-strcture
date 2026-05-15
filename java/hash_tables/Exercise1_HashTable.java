/**
 * Ejercicio 1: Tabla Hash Simple
 *
 * Instrucciones: Implementa una tabla hash con:
 * - put(key, value): insertar
 * - get(key): buscar
 * - remove(key): eliminar
 * - contains(key): verificar existencia
 */
public class Exercise1_HashTable {
    private class Entry {
        String key;
        String value;
        Entry next;
        Entry(String k, String v) { key = k; value = v; }
    }

    private Entry[] table;
    private int size;

    public Exercise1_HashTable(int capacity) {
        // TODO: Inicializar tabla
    }

    public void put(String key, String value) {
        // TODO: Implementar hash y插入
    }

    public String get(String key) {
        // TODO: Implementar búsqueda
        return null;
    }

    public void remove(String key) {
        // TODO: Implementar eliminación
    }

    public boolean contains(String key) {
        // TODO: Implementar
        return false;
    }

    public static void main(String[] args) {
        Exercise1_HashTable ht = new Exercise1_HashTable(10);
        ht.put("name", "John");
        System.out.println(ht.get("name"));
    }
}