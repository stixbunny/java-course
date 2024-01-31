package com.udemycourse.restfulwebservices.helloworld;

import java.util.Locale;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

  private MessageSource messageSource;

  public HelloWorldController(MessageSource messageSource) {
    this.messageSource = messageSource;
  }

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

  @GetMapping("/hello-world-i18n")
  public String getMethodName() {
    Locale locale = LocaleContextHolder.getLocale();
    return messageSource.getMessage("good.morning.message", null, "Default Message", locale);

  }

}
