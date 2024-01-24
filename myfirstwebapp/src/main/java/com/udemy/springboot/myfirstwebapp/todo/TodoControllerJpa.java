package com.udemy.springboot.myfirstwebapp.todo;

import java.time.LocalDate;
import java.util.List;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import jakarta.validation.Valid;

@Controller
@SessionAttributes("name")
public class TodoControllerJpa {

  private TodoRepository todoRepository;

  public TodoControllerJpa(TodoRepository todoRepository) {
    this.todoRepository = todoRepository;
  }

  @RequestMapping(value = "list-todos", method = RequestMethod.GET)
  public String listAllTodos(ModelMap model) {
    String username = getLoggedinUsername(model);
    List<Todo> todos = todoRepository.findByUsername(username);
    model.addAttribute("todos", todos);
    return "listTodos";
  }

  private String getLoggedinUsername(ModelMap model) {
    return SecurityContextHolder.getContext().getAuthentication().getName();
  }

  @RequestMapping(value = "add-todo", method = RequestMethod.GET)
  public String newTodo(ModelMap model) {
    String username = getLoggedinUsername(model);
    Todo todo = new Todo(0, username, "", LocalDate.now().plusYears(1), false);
    model.put("todo", todo);
    return "todo";
  }

  @RequestMapping(value = "add-todo", method = RequestMethod.POST)
  public String addTodo(ModelMap model, @Valid Todo todo, BindingResult result) {
    if (result.hasErrors()) {
      return "todo";
    }
    String username = (String) model.get("name");
    todo.setUsername(username);
    todoRepository.save(todo);
    return "redirect:list-todos";
  }

  @RequestMapping(value = "delete-todo", method = RequestMethod.GET)
  public String deleteTodo(@RequestParam int id) {
    todoRepository.deleteById(id);
    return "redirect:list-todos";
  }

  @RequestMapping(value = "update-todo", method = RequestMethod.GET)
  public String updateTodoPage(@RequestParam int id, ModelMap model) {
    Todo todo = todoRepository.findById(id).get();
    model.addAttribute("todo", todo);
    return "todo";
  }

  @RequestMapping(value = "update-todo", method = RequestMethod.POST)
  public String updateTodo(ModelMap model, @Valid Todo todo, BindingResult result) {
    if (result.hasErrors()) {
      return "todo";
    }
    String username = (String) model.get("name");
    todo.setUsername(username);
    todoRepository.save(todo);
    return "redirect:list-todos";
  }



}
