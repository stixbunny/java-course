package com.udemy.learnspringaop.data;

import org.springframework.stereotype.Repository;

@Repository
public class DataService1 {
  public int[] retrieveData() {
    try {
      Thread.sleep(30);
    } catch (InterruptedException ex) {
      ex.printStackTrace();
    }
    return new int[] { 11, 22, 33, 44, 55 };
  }
}
