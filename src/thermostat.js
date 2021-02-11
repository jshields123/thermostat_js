'use strict';

class Thermostat {

  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.POWER_SAVING = false;
    this.MAXIMUM_TEMPERATURE = 25
  }

  getCurrentTemperature(){
    return this.temperature;
  }

  up(){
    if (this.isMaximumTemperature()){
      return;
    }
     this.temperature += 1;
  }

  down(){
    if (this.isMinimumTemperature()){
      return;
    }
    this.temperature -= 1;
  }

  isMinimumTemperature(){
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  turnOnPowerSaving(){
    this.POWER_SAVING = true
  }

  isPowerSaving(){
    return this.POWER_SAVING === true
  }

  isMaximumTemperature(){
    return this.temperature === this.MAXIMUM_TEMPERATURE;
  }
};
