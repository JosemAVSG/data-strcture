/**
 * Ejercicio 1: Árbol Binario con Recorridos
 *
 * Instrucciones: Implementa una clase BinaryTree con métodos para:
 * - insert(value): insertar valor
 * - inorder(): recorrido inorden
 * - preorder(): recorrido preorden
 * - postorder(): recorrido postorden
 */
public class Exercise1_BinaryTree {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int v) { val = v; }
    }

    TreeNode root;

    public void insert(int val) {
        // TODO: Implementar inserción
    }

    public void inorder(TreeNode node) {
        // TODO: Implementar
    }

    public void preorder(TreeNode node) {
        // TODO: Implementar
    }

    public void postorder(TreeNode node) {
        // TODO: Implementar
    }

    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        tree.insert(5);
        tree.insert(3);
        tree.insert(7);
        System.out.print("Inorden: ");
        tree.inorder(tree.root);
    }
}