package com.example.udemy.restapi.basic;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

// stateless rest api, no csrf, no session, authenticate all requests

@Configuration
public class BasicAuthenticationSecurityConfiguration {

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests(auth -> auth.anyRequest().authenticated());
    http.httpBasic(Customizer.withDefaults());
    // stateless
    http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
    // disabel csrf
    http.csrf(csrf -> csrf.disable());
    return http.build();
  }
}
