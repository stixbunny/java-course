package com.udemy.mockito.mockitodemo.list;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class ListTest {

  @Test
  void test() {
    List listMock = mock(List.class);
    when(listMock.size()).thenReturn(3);
    assertEquals(3, listMock.size());
  }

  @Test
  void multipleReturns() {
    List listMock = mock(List.class);
    when(listMock.size()).thenReturn(1).thenReturn(2);
    assertEquals(1, listMock.size());
    assertEquals(2, listMock.size());
    assertEquals(2, listMock.size());
  }

  @Test
  void specificParameters() {
    List listMock = mock(List.class);
    when(listMock.get(0)).thenReturn("Something");
    assertEquals("Something", listMock.get(0));
    assertEquals(null, listMock.get(1));
  }

  @Test
  void genericParameters() {
    List listMock = mock(List.class);
    when(listMock.get(Mockito.anyInt())).thenReturn("SomeOtherThing");
    assertEquals("SomeOtherthing", listMock.get(0));
    assertEquals("SomeOtherThing", listMock.get(1));
  }

}
