package com.udemy.junit;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class MyMathTest {
  @Test
  void testArraySum() {
    MyMath math = new MyMath();
    int[] numbers = { 1, 2, 3 };
    int result = math.arraySum(numbers);
    int expectedResult = 6;
    assertEquals(expectedResult, result);
  }
}
