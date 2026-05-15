/**
 * Ejercicio 5: Convertir Arreglo a BST Balanceado
 *
 * Instrucciones: Implementa una función que convierta un arreglo
 * ordenado en un árbol binario de búsqueda balanceado.
 *
 * Ejemplo:
 *   Input: [-10, -3, 0, 5, 9]
 *   Output: árbol balanceado
 *          0
 *        /   \
 *      -3    9
 *      /    / \
 *    -10  5
 */
public class Exercise5_ArrayToBST {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int v) { val = v; }
    }

    public static TreeNode sortedArrayToBST(int[] nums) {
        // TODO: Implementar (usa recursion con índices)
        return null;
    }

    public static void main(String[] args) {
        int[] nums = {-10, -3, 0, 5, 9};
        TreeNode root = sortedArrayToBST(nums);
        System.out.println("BST creado");
    }
}