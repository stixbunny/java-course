package com.udemy.mockito.mockitodemo.business;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
// import org.springframework.boot.test.context.SpringBootTest;

// @SpringBootTest
public class SomeBusinessImplTest {

  @Test
  void test() {
    DataServiceStub dataServiceStub = new DataServiceStub();
    SomeBusinessImpl businessImpl = new SomeBusinessImpl(dataServiceStub);
    int result = businessImpl.findTheGreatestFromAllData();
    assertEquals(25, result);

  }

}

class DataServiceStub implements DataService {

  @Override
  public int[] retrieveAllData() {
    return new int[] { 25, 15, 5 };
  }

}
