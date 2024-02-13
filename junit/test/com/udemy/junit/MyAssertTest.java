package com.udemy.junit;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class MyAssertTest {

  @Test
  void test() {
    assertEquals(6, math.arraySum(new int[] { 1, 2, 3 }));
  }

  @Test
  void testArraySumEmpty() {
    assertEquals(0, math.arraySum(new int[] {}));
  }
}