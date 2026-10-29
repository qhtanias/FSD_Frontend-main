public class Example {
    public static void main(String[] args) {
        int x = 10;

        if (10 == x) {                  // condition now matches x
            int y = 30;
            x = x + 20;
            System.out.println(y);      // 30
        }

        System.out.println(x);          // 30
    }
}