package com.udemy.learnspringsecurity.resources;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.security.RolesAllowed;

@RestController
public class TodoResource {

  private Logger logger = LoggerFactory.getLogger(getClass());

  private static final List<Todo> TODOS_LIST = List.of(new Todo("stixbunny", "Get AWS Certified"));

  @GetMapping("/todos")
  public List<Todo> getAllTodos() {
    return TODOS_LIST;
  }

  @PreAuthorize("hasRole('USER') and authentication.name == 'stixbunny'")
  @PostAuthorize("returnObject[0].username == 'stixbunny'")
  @GetMapping("/users/{username}/todos")
  @RolesAllowed({ "ADMIN", "USER" })
  @Secured({ "ROLE_ADMIN", "ROLE_USER" })
  public List<Todo> getUserTodos(@PathVariable("username") String username) {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    logger.info("--- {} for {}", username, authentication.getName());
    return TODOS_LIST.stream().filter(todo -> todo.username().equals(username)).toList();
  }

  @PostMapping("/users/{username}/todos")
  public void createUserTodo(@PathVariable("username") String username, @RequestBody Todo todo) {
    logger.info("Create {} for {}", todo, username);
    // TODOS_LIST.add(todo);
  }

}

record Todo(String username, String description) {

}