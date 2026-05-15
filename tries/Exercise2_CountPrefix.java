/**
 * Ejercicio 2: Contar Palabras con Prefijo
 *
 * Instrucciones: Implementa una función que cuente cuántas palabras
 * en el Trie empiezan con un prefijo dado.
 *
 * Ejemplo:
 *   insert("apple", "apply", "app", "apt")
 *   countPrefix("app") = 3
 */
public class Exercise2_CountPrefix {
    static class TrieNode {
        TrieNode[] children = new TrieNode[26];
        boolean isEndOfWord = false;
    }

    private TrieNode root;
    private int count = 0;

    public void insert(String word) {
        // TODO: Implementar
    }

    public int countWordsWithPrefix(String prefix) {
        // TODO: Contar palabras que empiezan con prefijo
        return 0;
    }

    public static void main(String[] args) {
        Exercise2_CountPrefix trie = new Exercise2_CountPrefix();
        trie.insert("apple");
        trie.insert("apply");
        trie.insert("app");
        trie.insert("apt");
        System.out.println("Prefijo 'app': " + trie.countWordsWithPrefix("app"));
    }
}