package com.udemy.learnspringaop.business;

import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.udemy.learnspringaop.data.DataService1;

@Service
public class BusinessService1 {
  private DataService1 dataService1;

  public BusinessService1(DataService1 dataService1) {
    this.dataService1 = dataService1;
  }

  public int calculateMax() {
    int[] data = dataService1.retrieveData();

    try {
      Thread.sleep(30);
    } catch (InterruptedException ex) {
      ex.printStackTrace();
    }

    return Arrays.stream(data).max().orElse(0);
  }
}
