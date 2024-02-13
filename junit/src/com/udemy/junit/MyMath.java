package com.udemy.junit;

public class MyMath {

  public int arraySum(int[] numberArray) {
    int sum = 0;
    for (int number : numberArray) {
      sum += number;
    }
    return sum;
  }
}
