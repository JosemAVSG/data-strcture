/**
 * Ejercicio 4: Contar Frecuencia de Elementos
 *
 * Instrucciones: Dado un arreglo, cuenta la frecuencia de cada
 * elemento usando una tabla hash.
 *
 * Ejemplo:
 *   Input: [1, 2, 2, 3, 3, 3]
 *   Output: {1:1, 2:2, 3:3}
 */
import java.util.*;
public class Exercise4_FrequencyCounter {
    public static Map<Integer, Integer> countFrequency(int[] arr) {
        // TODO: Implementar usando HashMap
        return new HashMap<>();
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 3, 3};
        System.out.println(countFrequency(arr));
    }
}