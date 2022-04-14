package com.example;

import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import jakarta.inject.Inject;

@Controller("/app2")
public class App2Controller {


  @Inject
  WeatherService weatherService;

  @Get
  HttpResponse<WeatherReport> latestWeather() {
    return HttpResponse.ok(weatherService.latestWeather());
  }

}
