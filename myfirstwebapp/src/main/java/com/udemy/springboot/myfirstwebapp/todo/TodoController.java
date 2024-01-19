package com.udemy.springboot.myfirstwebapp.todo;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class TodoController {

  private TodoService todoService;

  public TodoController(TodoService todoService) {
    this.todoService = todoService;
  }

  @RequestMapping(value = "list-todos", method = RequestMethod.GET)
  public String listAllTodos(ModelMap model) {
    List<Todo> todos = todoService.findByUsername("stixbunny");
    model.addAttribute("todos", todos);
    return "listTodos";
  }

}
