package com.udemycourse.restfulwebservices.jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.udemycourse.restfulwebservices.user.Post;

public interface PostRepository extends JpaRepository<Post, Integer> {

}
