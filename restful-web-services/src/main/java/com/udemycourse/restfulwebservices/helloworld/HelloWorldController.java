package com.udemycourse.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

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

  @GetMapping("hello-world/path-variable/{name}")
  public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
    return new HelloWorldBean(String.format("Henlo word %s", name));
  }

}
