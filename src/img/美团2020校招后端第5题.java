package niuke;

import java.util.Map;
import java.util.Scanner;

/**
 * @author: wangft
 * @create: 2022/3/18 20:34
 */
public class 美团2020校招后端第5题 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
//        String s = "true and false or true and true";

        String[] arr = s.split(" ");

        String res = calc(arr);

        System.out.println(res);

    }

    public static String calc(String[] arr){
        if (arr == null || arr.length == 0){
            return "error";
        }
       if (arr.length == 1){
           if (isTrue(arr[0])) return "true";
           if (isFalse(arr[0])) return "false";
           return "error";
       }
       if (arr.length == 2){
           return "error";
       }
       String a = arr[0];
       String op = arr[1];
       String b = arr[2];
       if (isAnd(op)){
           String val = bool(a, op, b);
           String[] _arr = addSToArr(arr, 3, arr.length, val, 1);
           return calc(_arr);
       }
       if (isOr(op)){
           String[] _arr = subArr(arr, 2, arr.length);
           String c = calc(_arr);
           return bool(a, op, c);
       }

        return "error";
    }
    public static String[] subArr(String[] arr, int start, int end){
        String[] res = new String[end - start];
        for (int i = start; i < end; i++){
            res[i - start] = arr[i];
        }
        return res;
    }
    public static String[] addSToArr(String[] arr, int start, int end, String s, int preOrEnd){
        String[] res = new String[end - start + 1];
        if (preOrEnd == 1){
            res[0] = s;
            for (int i = start; i < end; i++){
                res[i - start + 1] = arr[i];
            }
        }

        if (preOrEnd == 2){
            for (int i = start; i < end; i++){
                res[i - start] = arr[i];
            }
            res[res.length - 1] = s;
        }
        return res;
    }

    public static String bool(String a, String op, String b){
        if (!isBoolValue(a) || !isOp(op) || !isBoolValue(b)){
            return "error";
        }
        if (isAnd(op)){
            if (isTrue(a) && isTrue(b)) {
                return "true";
            }
            return "false";
        }
        if (isOp(op)){
            if (isTrue(a) || isTrue(b)){
                return "true";
            }
            return "false";
        }
        return "error";
    }

    public static boolean isOp(String s){
        if (isAnd(s) || isOr(s)){
            return true;
        }
        return false;
    }
    public static boolean isBoolValue(String s){
        if (isTrue(s) || isFalse(s)){
            return true;
        }
        return false;
    }

    public static boolean isAnd(String s){
        return "and".equals(s);
    }
    public static boolean isOr(String s){
        return "or".equals(s);
    }
    public static boolean isTrue(String s){
        return "true".equals(s);
    }

    public static boolean isFalse(String s){
        return "false".equals(s);
    }

}
