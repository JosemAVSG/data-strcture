/**
 * Ejercicio 3: Validar BST
 *
 * Instrucciones: Implementa una función que verifique si un árbol
 * binario es un Árbol de Búsqueda Binaria (BST).
 * En BST: todos los nodos izq < nodo < todos los nodos der
 */
public class Exercise3_ValidateBST {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int v) { val = v; }
    }

    public static boolean isValidBST(TreeNode root) {
        // TODO: Implementar (puedes usar límites min/max)
        return true;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(2);
        root.left = new TreeNode(1);
        root.right = new TreeNode(3);
        System.out.println("Es BST: " + isValidBST(root));
    }
}