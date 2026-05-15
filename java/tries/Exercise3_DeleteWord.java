/**
 * Ejercicio 3: Eliminar Palabra de Trie
 *
 * Instrucciones: Implementa una función que elimine una palabra
 * del Trie. Si al eliminar queda un nodo sin hijos, también elimínalo.
 */
public class Exercise3_DeleteWord {
    static class TrieNode {
        TrieNode[] children = new TrieNode[26];
        boolean isEndOfWord = false;
    }

    private TrieNode root;

    public void insert(String word) {
        // TODO: Insertar
    }

    public void delete(String word) {
        // TODO: Eliminar palabra (puede requerir eliminar nodos)
    }

    public boolean search(String word) {
        // TODO: Buscar
        return false;
    }

    public static void main(String[] args) {
        Exercise3_DeleteWord trie = new Exercise3_DeleteWord();
        trie.insert("apple");
        trie.delete("apple");
        System.out.println("Busca después de borrar: " + trie.search("apple"));
    }
}