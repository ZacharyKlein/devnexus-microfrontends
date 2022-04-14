package com.example;

import io.micronaut.core.annotation.Introspected;

@Introspected
public class WeatherReport {

  private Integer high;
  private Integer low;
  private Integer wind;
  private Direction direction;

  public Integer getHigh() {
    return high;
  }

  public void setHigh(Integer high) {
    this.high = high;
  }

  public Integer getLow() {
    return low;
  }

  public void setLow(Integer low) {
    this.low = low;
  }

  public Integer getWind() {
    return wind;
  }

  public void setWind(Integer wind) {
    this.wind = wind;
  }

  public Direction getDirection() {
    return direction;
  }

  public void setDirection(Direction direction) {
    this.direction = direction;
  }

  enum Direction {
    NORTH, SOUTH, EAST, WEST
  }
}


