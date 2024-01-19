package com.udemy.springboot.myfirstwebapp.login;

import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
  public boolean authenticate(String username, String password) {
    boolean isValidUsername = username.equalsIgnoreCase("name");
    boolean isValidPassword = password.equals("pass");
    return isValidPassword && isValidUsername;
  }
}
