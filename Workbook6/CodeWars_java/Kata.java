public class Kata {

    public static void main(String[] args) {

        // double price = 3.5;
        // int age = 15;
        // String name = "Gregor";

        String type = evenOrOdd(24);
        System.out.println("Type: " + type);
    }

    public static String evenOrOdd(int number) {
        return number % 2 == 0 ? "Even" : "Odd"; // Place code here;
    }

}