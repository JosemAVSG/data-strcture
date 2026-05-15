/**
 * Ejercicio 1: Trie (Árbol de Prefijos)
 *
 * Instrucciones: Implementa un Trie con:
 * - insert(word): insertar palabra
 * - search(word): buscar palabra exacta
 * - startsWith(prefix): buscar prefijos
 */
public class Exercise1_Trie {
    static class TrieNode {
        TrieNode[] children = new TrieNode[26];
        boolean isEndOfWord = false;
    }

    private TrieNode root;

    public Exercise1_Trie() {
        // TODO: Inicializar root
    }

    public void insert(String word) {
        // TODO: Insertar palabra caracter por caracter
    }

    public boolean search(String word) {
        // TODO: Buscar palabra exacta
        return false;
    }

    public boolean startsWith(String prefix) {
        // TODO: Verificar si hay palabras con este prefijo
        return false;
    }

    public static void main(String[] args) {
        Exercise1_Trie trie = new Exercise1_Trie();
        trie.insert("apple");
        System.out.println("busca apple: " + trie.search("apple"));
        System.out.println("prefijo app: " + trie.startsWith("app"));
    }
}