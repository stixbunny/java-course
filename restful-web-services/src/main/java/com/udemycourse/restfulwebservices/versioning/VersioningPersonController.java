package com.udemycourse.restfulwebservices.versioning;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class VersioningPersonController {

  @GetMapping("/v1/person")
  public PersonV1 getPersonV1() {
    return new PersonV1("Bob Charlie");
  }

  @GetMapping("/v2/person")
  public PersonV2 getPersonV2() {
    return new PersonV2(new Name("Bob", "Charlie"));
  }

}
