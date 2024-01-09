package com.udemycourse.learnspringframework.helloworld;

import java.util.Arrays;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App02HelloWorldSpring {
  public static void main(String[] args) {
    // launch spring context
    try(
      var context = new AnnotationConfigApplicationContext(HelloWorldConfiguration.class);
    ) {
      
    // configure spring
    // - @configuration
    // - name - @Bean
    // get beans from spring
    System.out.println(context.getBean("name"));
    System.out.println(context.getBean("age"));
    System.out.println(context.getBean("person"));
    System.out.println(context.getBean("address"));
    Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);;
    };
  }
}
