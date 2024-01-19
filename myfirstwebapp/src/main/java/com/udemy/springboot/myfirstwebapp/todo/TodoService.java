package com.udemy.springboot.myfirstwebapp.todo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoService {
  private static List<Todo> todos = new ArrayList<>();
  private static int todosCount = 0;
  static {
    todos.add(new Todo(++todosCount, "stixbunny", "Learn AWS", LocalDate.now().plusYears(1), false));
    todos.add(new Todo(++todosCount, "stixbunny", "Learn GCP", LocalDate.now().plusYears(1), false));
    todos.add(new Todo(++todosCount, "stixbunny", "Learn Flash", LocalDate.now().plusMonths(5), false));
  }

  public List<Todo> findByUsername(String username) {
    return todos;
  }

  public void addTodo(String username, String description, LocalDate targetDate, boolean done) {
    Todo todo = new Todo(++todosCount, username, description, targetDate, done);
    todos.add(todo);
  }
}
