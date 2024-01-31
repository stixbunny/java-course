package com.udemycourse.restfulwebservices.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.udemycourse.restfulwebservices.user.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
