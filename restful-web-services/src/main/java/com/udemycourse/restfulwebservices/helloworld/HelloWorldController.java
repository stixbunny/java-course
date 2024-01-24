package com.udemycourse.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class HelloWorldController {

  @GetMapping(path = "hello-world")
  // @RequestMapping(path = "hello-world", method = RequestMethod.GET)
  public String HelloWorld() {
    return "Hello World";
  }

  @GetMapping("hello-world-bean")
  public HelloWorldBean helloWorldBeaString() {
      return new HelloWorldBean("Hello World");
  }
  

}
