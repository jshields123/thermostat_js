'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('starts at 20 degress', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('can increase temp by 1 with up', function(){
    expect(thermostat.up()).toEqual(21);
  });

  it('can decrease temp by 1 with down', function(){
    expect(thermostat.down()).toEqual(19);
  })
});
