package Java;
import java.util.List;

class CountItemsMatchingaRule {
    public int countMatches(List<List<String>> items, String ruleKey, String ruleValue) {
        int cnt = 0;
        int pos = 0;
        if(ruleKey.equals("color")) {
            pos = 1;
        } else if(ruleKey.equals("name")) {
            pos = 2;
        }

        for(int i = 0; i < items.size();i++) {
            List sub = items.get(i);
            if(sub.get(pos).equals(ruleValue)) {
                cnt++;
            }
        }
        return cnt;
    }
}
