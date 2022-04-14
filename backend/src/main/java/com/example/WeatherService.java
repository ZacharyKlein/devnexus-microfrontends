package com.example;

import io.micronaut.runtime.context.scope.Refreshable;

import javax.annotation.PostConstruct;
import java.util.*;

@Refreshable
public class WeatherService {

  private static final List<WeatherReport.Direction> DIRECTIONS = List.of(WeatherReport.Direction.values());
  private static final Random random = new Random();
  private WeatherReport weatherReport;

  @PostConstruct
  public void init() {
    weatherReport = new WeatherReport();
    weatherReport.setHigh((int) ((Math.random() * 50) + 50));
    weatherReport.setLow((int) (Math.random() * 50));
    weatherReport.setWind((int) (Math.random() * 10));
    weatherReport.setDirection(DIRECTIONS.get(random.nextInt(DIRECTIONS.size())));
  }

  WeatherReport latestWeather() {
    return weatherReport;
  }
}
