package Java;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;

class GroupPeopleGivenSize {
    public List<List<Integer>> groupThePeople(int[] groupSizes) {
        //i in array = person number
        //value of i = group number
        //take the value of i to assign a group with the pos as the number

        List<List<Integer>> parent = new ArrayList<>();
        HashMap<Integer, ArrayList<Integer>> child = new HashMap<>();

        for(int i = 0; i < groupSizes.length; i++) {
            ArrayList<Integer> temp = new ArrayList<Integer>();
            if(child.containsKey(groupSizes[i])) {
                temp = child.get(groupSizes[i]);
            } else {
                child.put(groupSizes[i], temp);
            }
            temp.add(i);
        }

        child.forEach((k,v) -> {
            if(v.size() > k) {
                int head = 0;
                while(head < v.size()) {
                    parent.add(v.subList(head, head+k));
                    head += k;
                }
            } else {
                parent.add(v);
            }
        });
        return parent;
    }

    public static void main(String args[]) {
        int[] groupSizes = {3,3,3,3,3,1,3,4,4,4,4};
        List<List<Integer>> parent = new ArrayList<>();
        HashMap<Integer, ArrayList<Integer>> child = new HashMap<>();

        for(int i = 0; i < groupSizes.length; i++) {
            ArrayList<Integer> temp = new ArrayList<Integer>();
            if(child.containsKey(groupSizes[i])) {
                temp = child.get(groupSizes[i]);
            } else {
                child.put(groupSizes[i], temp);
            }
            temp.add(i);
        }

        child.forEach((k,v) -> {
            if(v.size() > k) {
                int head = 0;
                while(head < v.size()) {
                    parent.add(v.subList(head, head+k));
                    head += k;
                }
            } else {
                parent.add(v);
            }
        });

        System.out.println(parent);
    }
}