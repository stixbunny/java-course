package com.udemycourse.restfulwebservices.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class UserDaoService {

  private static List<User> users = new ArrayList<>();

  static {
    users.add(new User(1, "Adam", LocalDate.now().minusYears(28)));
    users.add(new User(2, "Eve", LocalDate.now().minusYears(28)));
    users.add(new User(3, "Steve", LocalDate.now().minusYears(27)));
  }

  public List<User> findAll() {
    return users;
  }

}
