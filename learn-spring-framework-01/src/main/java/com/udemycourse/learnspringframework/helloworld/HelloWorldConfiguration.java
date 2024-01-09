package com.udemycourse.learnspringframework.helloworld;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

record Person(String name, int age) {

}

record Address(String firstLine, String city) {

}

@Configuration
public class HelloWorldConfiguration {

  @Bean(name = "name")
  public String name() {
    return "Milenko";
  }

  @Bean(name = "age")
  public int age() {
    return 31;
  }

  @Bean(name = "person")
  public Person person() {
    return new Person("Thomas", 30);
  }

  @Bean(name = "address")
  public Address address() {
    return new Address("Rio Cruces", "Santiago");
  }
}
