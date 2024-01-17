package com.udemycourse.learnjpaandhibernate.course.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.udemycourse.learnjpaandhibernate.course.Course;

@Component
public class CourseJdbcCommandLineRunner implements CommandLineRunner {

  @Autowired
  private CourseJdbcRepository repository;

  @Override
  public void run(String... args) throws Exception {
    repository.insert(new Course(1, "Learn AWS", "udemy"));
    repository.insert(new Course(2, "Learn Azure", "udemy"));
    repository.insert(new Course(3, "Learn DevOps", "udemy"));

    repository.deleteById(1);
  }

}
