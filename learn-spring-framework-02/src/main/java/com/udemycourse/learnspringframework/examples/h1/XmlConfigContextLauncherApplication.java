package com.udemycourse.learnspringframework.examples.h1;

import java.util.Arrays;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.udemycourse.learnspringframework.game.GameRunner;

public class XmlConfigContextLauncherApplication {

  public static void main(String[] args) {
    try (var context = new ClassPathXmlApplicationContext("contextConfiguration.xml")) {
      Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);

      // System.out.println(context.getBean("gameRunner"));
      context.getBean(GameRunner.class).run();
    }
  }
}
