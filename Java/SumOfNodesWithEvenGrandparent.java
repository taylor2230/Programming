package Java;
import javax.swing.tree.TreeNode;

class SumOfNodesWithEvenGrandparent {

    public class TreeNode {
             int val;
             TreeNode left;
             TreeNode right;
             TreeNode() {}
             TreeNode(int val) { this.val = val; }
             TreeNode(int val, TreeNode left, TreeNode right) {
                 this.val = val;
                 this.left = left;
                 this.right = right;
             }
    }

    private int sum = 0;
    
    private void search(TreeNode root, TreeNode parent, TreeNode grandparent) {
        if(root == null) {
            return;
        }

        if(grandparent != null && (grandparent.val % 2 == 0)) {
            sum += root.val;
        }
        search(root.left, root, parent);
        search(root.right, root, parent);
    }

    public int sumEvenGrandparent(TreeNode root) {
        search(root, null, null);
        return sum;
    }

}