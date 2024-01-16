package com.udemycourse.learnspringframework.examples.f1;

import java.util.Arrays;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;

@Component
class SomeClass {
  private SomeDependency someDependency;

  public SomeClass(SomeDependency someDependency) {
    this.someDependency = someDependency;
    System.out.println("All dependencies are ready!");
  }

  @PostConstruct
  public void initialize() {
    someDependency.getReady();
  }
  
}

@Component
class SomeDependency {
  public void getReady() {
    System.out.println("Using SomeDependency");
  }
}

@Configuration
@ComponentScan
public class SimpleSpringContextLauncherApplication {

  public static void main(String[] args) {
    try (var context = new AnnotationConfigApplicationContext(SimpleSpringContextLauncherApplication.class)) {
      Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);
    }
  }
}
