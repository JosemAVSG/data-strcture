/**
 * Ejercicio 5: Directorio Telefónico con Trie
 *
 * Instrucciones: Implementa un directorio de contactos donde
 * puedas buscar contactos por prefijo de nombre.
 *
 * Métodos:
 * - addContact(name, phone): agregar contacto
 * - searchByPrefix(prefix): buscar contactos que empiecen con prefijo
 */
import java.util.*;
public class Exercise5_PhoneDirectory {
    static class TrieNode {
        TrieNode[] children = new TrieNode[26];
        String phone = null; // si no es null, es fin de contacto
    }

    private TrieNode root;

    public void addContact(String name, String phone) {
        // TODO: Insertar nombre y teléfono
    }

    public List<String> searchByPrefix(String prefix) {
        // TODO: Buscar contactos que empiecen con prefijo
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Exercise5_PhoneDirectory dir = new Exercise5_PhoneDirectory();
        dir.addContact("Juan", "123456");
        dir.addContact("Jorge", "789012");
        dir.addContact("Juan Carlos", "345678");
        System.out.println("Prefijo 'Jua': " + dir.searchByPrefix("Jua"));
    }
}