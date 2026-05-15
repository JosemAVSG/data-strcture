/**
 * Ejercicio 2: Verificar Paréntesis Balanceados
 *
 * Instrucciones: Usa una pila para verificar si una expresión tiene
 * los paréntesis correctamente balanceados.
 *
 * Ejemplo:
 *   Input: "({[]})" -> Output: true
 *   Input: "((()" -> Output: false
 */
import java.util.*;
public class Exercise2_BalancedParentheses {
    public static boolean isBalanced(String expr) {
        // TODO: Implementar usando una pila
        return false;
    }

    public static void main(String[] args) {
        System.out.println("({[]}) es balanceado: " + isBalanced("({[]})"));
        System.out.println("((() es balanceado: " + isBalanced("(()"));
    }
}