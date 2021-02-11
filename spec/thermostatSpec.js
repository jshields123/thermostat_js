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
  });

  it('has a minimum temperature of 10 degrees', function(){
    for(var i = 0; i < 11 ; i ++) {
        thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has power saving mode that can be on', function(){
    thermostat.turnOnPowerSaving()
    expect(thermostat.isPowerSavingOn()).toBe(true);
  });

  it('power saving can be turned off', function(){
    thermostat.turnOffPowerSaving()
    expect(thermostat.isPowerSavingOn()).toBe(false);
  })

it('it can be switched back on', function(){
  thermostat.turnOffPowerSaving()
  expect(thermostat.isPowerSavingOn()).toBe(false);
  thermostat.turnOnPowerSaving()
  expect(thermostat.isPowerSavingOn()).toBe(true);
});

it('it can be reset to 20 degrees', function(){
  for (var i = 0; i < 5; i ++ ) {
    thermostat.up();
  }
  thermostat.resetTemp();
  expect(thermostat.getCurrentTemperature()).toEqual(20)
});

describe('when power saving is on', function(){
  it('maximum temperature is 25 when power saving is on', function(){
    for (var i = 0; i < 5; i ++) {
      thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

  it('maximum temperature is 32 when power saving is off', function(){
    for (var i = 0; i < 13; i ++) {
      thermostat.up();
    }

    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

});

  describe('levels of usage', function(){
    describe('when the temperature is below 18 degrees', function(){
      it('it is considered low usage', function(){
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });
    describe('when the temperature is between 18 and 25 degrees', function(){
      it('it is considered medium-usage', function(){
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });
    describe('when the temperature is anything else', function(){
      it('it is considered high-usage', function(){
        thermostat.POWER_SAVING = false;
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });
});
