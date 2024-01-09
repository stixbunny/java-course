package com.udemycourse.learnspringframework;

import com.udemycourse.learnspringframework.game.GameRunner;
import com.udemycourse.learnspringframework.game.MarioGame;
import com.udemycourse.learnspringframework.game.PacManGame;
import com.udemycourse.learnspringframework.game.SuperContraGame;

public class App01GamingBasicJava {
  public static void main(String[] args) {
    // var game = new MarioGame();
    // var game = new SuperContraGame();
    var game = new PacManGame();
    var gameRunner = new GameRunner(game);
    gameRunner.run();
  }
}
