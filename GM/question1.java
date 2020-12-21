package GM;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;

public class question1 {

    static int convertToBits(int num) {
        int convert = (int) (Math.log(num) / Math.log(2) + 1);
        return convert;
    }

    public static void main(String args[]) {
        InputStreamReader reader = new InputStreamReader(System.in, StandardCharsets.UTF_8);
        BufferedReader in = new BufferedReader(reader);
        String line = "86,2,3";

        String[] array = line.split(",");
        int numToBits = Integer.parseInt(array[0]);
        int p1 = Integer.parseInt(array[1]);
        int p2 = Integer.parseInt(array[2]);
        boolean areSame = ( (numToBits >> (p1 - 1)) & 1 ) == ( (numToBits >> (p2 - 1 )) & 1 );
        System.out.print(areSame);
    }
}
