package com.udemycourse.learnspringframework;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.udemycourse.learnspringframework.game.GameRunner;
import com.udemycourse.learnspringframework.game.GamingConsole;

@Configuration
@ComponentScan("com.udemycourse.learnspringframework.game")
public class GamingAppLauncherApplication {

  public static void main(String[] args) {
    try (var context = new AnnotationConfigApplicationContext(GamingAppLauncherApplication.class)) {
      context.getBean(GamingConsole.class).up();
      context.getBean(GameRunner.class).run();
    }
  }
}
