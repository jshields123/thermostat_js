$(document).ready(function(){
  let thermostat = new Thermostat();
  updateTemperature();
  // $('#temperature').text(thermostat.getCurrentTemperature());

  $('#temperature-up').on('click', function(){
  thermostat.up();
  updateTemperature();
  // $('#temperature').text(thermostat.getCurrentTemperature());

})
  $('#temperature-down').click(function(){
    thermostat.down();
    updateTemperature();
    // $('#temperature').text(thermostat.getCurrentTemperature());
  })

  $('#temperature-reset').click(function(){
    thermostat.resetTemp();
    updateTemperature();
  })

  $('#powersaving-on').click(function(){
    thermostat.turnOnPowerSaving();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function(){
    thermostat.turnOffPowerSaving();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#energy-usage-status').attr('class', thermostat.energyUsage());
      $('#energy-usage-status').text(thermostat.energyUsage());
  }
})
