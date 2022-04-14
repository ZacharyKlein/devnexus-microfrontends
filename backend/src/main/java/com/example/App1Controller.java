package com.example;

import io.micronaut.core.annotation.Nullable;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.QueryValue;

@Controller("/app1")
public class App1Controller {

  @Get(produces = MediaType.TEXT_PLAIN)
  HttpResponse<String> greeting(@Nullable @QueryValue String name) {

    String greeting = "Hello, ";

    if(name == null || name.trim().equals("")) {
      greeting = greeting + "World!";
    } else {
      greeting = greeting + name + "!";
    }

    return HttpResponse.ok(greeting);
  }

}
