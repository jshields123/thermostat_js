$(document).ready(function(){
  let thermostat = new Thermostat();

  $('#temperature').text(thermostat.getCurrentTemperature());

  $('#temperature-up').on('click', function(){
  thermostat.up();
  $('#temperature').text(thermostat.getCurrentTemperature());

})
  $('#temperature-down').click(function(){
    thermostat.down();
    $('#temperature').text(thermostat.getCurrentTemperature());
  })

})
