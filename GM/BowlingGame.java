package GM;

public class BowlingGame {
    
    int[] frames;
    int newRoll;

    public BowlingGame() {
        this.frames = new int[21];
    }

    public void roll(int pins) {
        frames[newRoll++] = pins;
    }

    public int score() {
        return -1;
    }
}
