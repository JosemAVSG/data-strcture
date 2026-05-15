/**
 * Ejercicio 4: Sugerencias de Palabras
 *
 * Instrucciones: Encuentra todas las palabras que empiezan con
 * un prefijo dado. Devuelve una lista con todas las palabras.
 */
import java.util.*;
public class Exercise4_Suggestions {
    static class TrieNode {
        TrieNode[] children = new TrieNode[26];
        boolean isEndOfWord = false;
    }

    private TrieNode root;

    public void insert(String word) {
        // TODO: Insertar
    }

    public List<String> suggestions(String prefix) {
        // TODO: Encontrar todas las palabras con prefijo
        return new ArrayList<>();
    }

    private void collectWords(TrieNode node, String prefix, List<String> results) {
        // TODO: Recolectar recursivamente todas las palabras
    }

    public static void main(String[] args) {
        Exercise4_Suggestions trie = new Exercise4_Suggestions();
        trie.insert("dog");
        trie.insert("doom");
        trie.insert("dark");
        trie.insert("duck");
        System.out.println("Sugerencias 'do': " + trie.suggestions("do"));
    }
}