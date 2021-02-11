'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  
  it('starts at 20 degress', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('can increase temp by 1 degree with up', function(){
    thermostat.up()
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('can decrease temp by 1 degree with down', function(){
    thermostat.down()
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  })

  it('has a minimum temperature of 10 degrees', function(){
    for(var i = 0; i < 11 ; i ++) {
        thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10)
  })

});
