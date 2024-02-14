package com.udemy.learnspringsecurity.resources;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoResource {

  private Logger logger = LoggerFactory.getLogger(getClass());

  private static final List<Todo> TODOS_LIST = List.of(new Todo("stixbunny", "Get AWS Certified"));

  @GetMapping("/todos")
  public List<Todo> getAllTodos() {
    return TODOS_LIST;
  }

  @GetMapping("/users/{username}/todos")
  public List<Todo> getUserTodos(@PathVariable String username) {
    return TODOS_LIST.stream().filter(todo -> todo.username().equals(username)).toList();
  }

  @PostMapping("/users/{username}/todos")
  public void createUserTodo(@PathVariable String username, @RequestBody Todo todo) {
    logger.info("Create {} for {}", todo, username);
    TODOS_LIST.add(todo);
  }

}

record Todo(String username, String description) {

}