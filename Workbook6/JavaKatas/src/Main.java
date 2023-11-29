// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        String type = evenOrOdd(25);
        System.out.println(type);
    }

    public static String evenOrOdd(int number){
        return number % 2 == 0 ? "Even" : "Odd";
    }
}