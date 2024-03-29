package com.udemy.learnspringsecurity.basic;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.jdbc.JdbcDaoImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableMethodSecurity(jsr250Enabled = true, securedEnabled = true)
public class BasicAuthSecurityConfiguration {

  @Bean
  SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests(
        auth -> {
          auth
              .requestMatchers("/users").hasRole("USER")
              .requestMatchers("/admin/**").hasRole("ADMIN")
              .anyRequest().authenticated();
        });
    // http.formLogin(Customizer.withDefaults());
    http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
    http.httpBasic(Customizer.withDefaults());
    http.csrf(csrf -> csrf.disable());
    http.headers(headers -> headers.frameOptions(frames -> frames.sameOrigin()));

    return http.build();
  }

  @Bean
  public UserDetailsService userDetailsService(DataSource dataSource) {
    UserDetails user = User.withUsername("stixbunny")
        // .password("{noop}password")
        .password("password")
        .passwordEncoder(pass -> passwordEncoder().encode(pass))
        .roles("USER")
        .build();

    UserDetails admin = User.withUsername("admin")
        .password("password")
        .passwordEncoder(pass -> passwordEncoder().encode(pass))
        .roles("ADMIN")
        .build();

    var jdbcUserDetailsManager = new JdbcUserDetailsManager(dataSource);

    jdbcUserDetailsManager.createUser(user);
    jdbcUserDetailsManager.createUser(admin);

    return jdbcUserDetailsManager;
  }

  @Bean
  public BCryptPasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  public DataSource dataSource() {
    return new EmbeddedDatabaseBuilder()
        .setType(EmbeddedDatabaseType.H2)
        .addScript(JdbcDaoImpl.DEFAULT_USER_SCHEMA_DDL_LOCATION)
        .build();
  }

  // @Bean
  // public WebMvcConfigurer corsConfigurer() {
  // return new WebMvcConfigurer() {

  // @Override
  // public void addCorsMappings(CorsRegistry registry) {
  // registry.addMapping("/**")
  // .allowedMethods("*")
  // .allowedOrigins("http://localhost:3000");
  // }

  // };
  // }

}
