package com.udemy.junit;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;

class MyAssertTest {

  List<String> todos = Arrays.asList("AWS", "Azure", "DevOps");

  @Test
  void test() {
    boolean test = todos.contains("AWS");
    assertEquals(true, test);
    assertTrue(test);
    assertEquals(3, todos.size());
  }

}