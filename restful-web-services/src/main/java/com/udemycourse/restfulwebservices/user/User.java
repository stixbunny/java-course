package com.udemycourse.restfulwebservices.user;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;

@Entity(name = "user_details")
public class User {
  @Id
  @GeneratedValue
  private Integer id;

  @Size(min=2, message="Name should have at least 2 characters")
  @JsonProperty("user_name")
  private String name;

  @Past(message = "Birthdate should be a date in the past")
  @JsonProperty("birth_date")
  private LocalDate birthDay;

  public User() {
  }

  public User(Integer id, String name, LocalDate birthDay) {
    this.id = id;
    this.name = name;
    this.birthDay = birthDay;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public LocalDate getBirthDay() {
    return birthDay;
  }

  public void setBirthDay(LocalDate birthDay) {
    this.birthDay = birthDay;
  }

  @Override
  public String toString() {
    return "User [id=" + id + ", name=" + name + ", birthDay=" + birthDay + "]";
  }

}
