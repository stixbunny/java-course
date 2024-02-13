package com.udemy.mockito.mockitodemo.business;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;

public class SomeBusinessImblMockTest {

  @Test
  void findTheGreatestFromAllData() {
    DataService dataServiceMock = mock(DataService.class);
    when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 25, 15, 5 });
    SomeBusinessImpl businessImpl = new SomeBusinessImpl(dataServiceMock);
    int result = businessImpl.findTheGreatestFromAllData();
    assertEquals(25, result);
  }

}
