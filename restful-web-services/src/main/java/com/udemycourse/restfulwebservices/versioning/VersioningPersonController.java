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

  @GetMapping(path = "/person", params = "version=1")
  public PersonV1 getPersonV1params() {
    return new PersonV1("Bob Charlie");
  }

  @GetMapping(path = "/person", params = "version=2")
  public PersonV2 getPersonV2params() {
    return new PersonV2(new Name("Bob", "Charlie"));
  }

  @GetMapping(path = "/person", headers = "X-API-VERSION=1")
  public PersonV1 getPersonV1headers() {
    return new PersonV1("Bob Charlie");
  }

  @GetMapping(path = "/person", headers = "X-API-VERSION=2")
  public PersonV2 getPersonV2headers() {
    return new PersonV2(new Name("Bob", "Charlie"));
  }

  @GetMapping(path = "/person", produces = "application/vnd.company.app-v1+json")
  public PersonV1 getPersonV1media() {
    return new PersonV1("Bob Charlie");
  }

  @GetMapping(path = "/person", produces = "application/vnd.company.app-v2+json")
  public PersonV2 getPersonV2media() {
    return new PersonV2(new Name("Bob", "Charlie"));
  }

}
