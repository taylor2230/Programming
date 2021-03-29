package Java;

/*
if s[i] = r || l and s[i+1] = l || r then 1
*/
class SplitStringBalancedStrings {
    public int balancedStringSplit(String s) {
        int count = 0;
        int balance = 0;
        
        for(char ch: s.toCharArray()) {
            if(ch == 'R') balance++;
            if(ch == 'L') balance--;
            
            if(balance == 0) count++;
        }
        return count;
    }
}