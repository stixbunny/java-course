package com.udemycourse.restfulwebservices.filtering;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class FilteringController {

  @GetMapping("/filtering")
  public SomeBean filtering() {
    return new SomeBean("first value", "second value", "third value");
  }

  @GetMapping("/filtering-list")
  public List<SomeBean> filteringList() {
    return Arrays.asList(new SomeBean("first value", "second value", "third value"),
        new SomeBean("first value", "second value", "third value"),
        new SomeBean("first value", "second value", "third value"),
        new SomeBean("first value", "second value", "third value"));
  }

}
