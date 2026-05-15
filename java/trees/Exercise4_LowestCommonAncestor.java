/**
 * Ejercicio 4: Ancestro Común Más Bajo (LCA)
 *
 * Instrucciones: Implementa una función que encuentre el ancestro
 * común más bajo de dos nodos en un árbol binario.
 *
 * Ejemplo:
 *       3
 *      / \
 *     5   1
 *    / \ / \
 *   6  2 0  8
 *
 *   LCA(5, 1) = 3
 *   LCA(5, 4) = 5
 */
public class Exercise4_LowestCommonAncestor {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int v) { val = v; }
    }

    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // TODO: Implementar
        return null;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(5);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(6);
        root.left.right = new TreeNode(2);

        TreeNode lca = lowestCommonAncestor(root, root.left, root.right);
        System.out.println("LCA: " + lca.val);
    }
}