package com.udemycourse.learnjpaandhibernate.course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

// import com.udemycourse.learnjpaandhibernate.course.jdbc.CourseJdbcRepository;
// import com.udemycourse.learnjpaandhibernate.course.jpa.CourseJpaRepository;
import com.udemycourse.learnjpaandhibernate.course.springdatajpa.CourseSpringDataJpaRepository;

@Component
public class CourseCommandLineRunner implements CommandLineRunner {

  // @Autowired
  // private CourseJdbcRepository repository;

  // @Autowired
  // private CourseJpaRepository repository;

  @Autowired
  private CourseSpringDataJpaRepository repository;

  @Override
  public void run(String... args) throws Exception {
    // repository.insert(new Course(1, "Learn AWS", "udemy"));
    // repository.insert(new Course(2, "Learn Azure", "udemy"));
    // repository.insert(new Course(3, "Learn DevOps", "udemy"));
    repository.save(new Course(1, "Learn AWS", "udemy"));
    repository.save(new Course(2, "Learn Azure", "udemy"));
    repository.save(new Course(3, "Learn DevOps", "udemy"));

    // repository.deleteById(1);
    repository.deleteById(1l);

    // System.out.println(repository.findById(3));
    // System.out.println(repository.findById(2));
    System.out.println(repository.findById(3l));
    System.out.println(repository.findById(2l));

    System.out.println(repository.findAll());

    System.out.println(repository.findByAuthor("udemy"));
    System.out.println(repository.findByAuthor(""));

    System.out.println(repository.findByName("Learn Azure"));
  }

}
