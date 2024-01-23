package com.udemy.springboot.myfirstwebapp.todo;

import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

// @Repository
public interface TodoRepository extends JpaRepository<Todo, Integer>{
  public List<Todo> findByUsername(String username);

}
