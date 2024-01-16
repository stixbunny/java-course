package com.udemycourse.learnspringframework.examples.c1;

import java.util.Arrays;

import org.springframework.stereotype.Service;

// @Component
@Service
public class BusinessCalculatorService {
  public DataService dataService;

  public BusinessCalculatorService(DataService dataService) {
    this.dataService = dataService;
  }

  public int findMax() {

    return Arrays.stream(dataService.retrieveData()).max().orElse(0);
  }
}
