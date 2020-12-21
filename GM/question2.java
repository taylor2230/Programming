package GM;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;

public class question2 {
    //SetRow which changes all values in cells on row I to X
    //SetCol which changes all values in col J to X
    //QueryRow which outputs sum of row I
    //Query Col which outputs sime of values on col J
    //everything starts as 0
    /*
        Goal is to just test the text and perform the request operation
        2D array (yuck in Java) to create the grid and iterate through either a row or col
        grid is 256 x 256 int
        complete the conversion from the inputted line at time needed for now
        output total only on Query commands
    */

    public static void main(String[] args) throws IOException {
        InputStreamReader reader = new InputStreamReader(System.in, StandardCharsets.UTF_8);
        BufferedReader in = new BufferedReader(reader);
        String line;
        int[][] tron = new int[256][256];
        int total = 0;
        while ((line = in.readLine()) != null) {
            total = 0;
            String[] request = line.split(" ");
            int r1 = Integer.parseInt(request[1]);
            int r2 = Integer.parseInt(request[2]);
            if(request[0].equals("SetRow")) {
                    for(int i = 0; i < 256; i++) {
                        tron[Integer.parseInt(request[1])][i] = Integer.parseInt(request[2]);
                    }
                } else if(request[0].equals("SetCol")) {
                    for(int i = 0; i < 256; i++) {
                        tron[i][Integer.parseInt(request[1])] = Integer.parseInt(request[2]);
                    }
                } else if(request[0].equals("QueryRow")) {
                    for(int i = 0; i < 256; i++) {
                        total += tron[Integer.parseInt(request[1])][i];
                    }
                } else if(request[0].equals("QueryCol")) {
                    for(int i = 0; i < 256; i++) {
                        total += tron[i][Integer.parseInt(request[1])];
                    }
                }

                if(request[0].equals("QueryRow") || request[0].equals("QueryCol")) {
                    System.out.println(total);
                }
            }
        }
      }
