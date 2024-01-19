package com.udemy.springboot.myfirstwebapp.todo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoService {
  private static List<Todo> todos = new ArrayList<>();
  static {
    todos.add(new Todo(1, "stixbunny", "Learn AWS", LocalDate.now().plusYears(1), false));
    todos.add(new Todo(2, "stixbunny", "Learn GCP", LocalDate.now().plusYears(1), false));
    todos.add(new Todo(3, "stixbunny", "Learn Flash", LocalDate.now().plusMonths(5), false));
  }

  public List<Todo> findByUsername(String username) {
    return todos;
  }
}
