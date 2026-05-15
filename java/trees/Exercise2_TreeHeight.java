/**
 * Ejercicio 2: Calcular Altura del Árbol
 *
 * Instrucciones: Implementa una función que calcule la altura de un
 * árbol binario (número de nodos en el camino más largo desde la raíz
 * hasta una hoja).
 *
 * Ejemplo:
 *       1
 *      / \
 *     2   3
 *    /
 *   4
 *   Altura = 3
 */
public class Exercise2_TreeHeight {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int v) { val = v; }
    }

    public static int height(TreeNode root) {
        // TODO: Implementar
        return 0;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        System.out.println("Altura: " + height(root));
    }
}