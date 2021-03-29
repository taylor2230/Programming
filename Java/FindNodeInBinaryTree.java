package Java;
import javax.swing.tree.TreeNode;
import java.util.LinkedList;

class FindNodeInBinaryTree  {
    public final TreeNode getTargetCopy(final TreeNode original, final TreeNode cloned, final TreeNode target) {
        LinkedList<TreeNode> container = new LinkedList<>();
        container.add(cloned);
        while(!container.isEmpty()) {
            TreeNode isma = container.pop();
            if(isma != null){
                if(isma.val == target.val) {
                    return isma;
                }
                container.add(isma.left);
                container.add(isma.right);
            }
        }
        return new TreeNode(-1);
    }
}