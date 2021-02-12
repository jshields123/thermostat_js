$(document).ready(function () {
  displayWeather('London');
  let thermostat = new Thermostat();
  updateTemperature();
  // $('#temperature').text(thermostat.getCurrentTemperature());

  $('#temperature-up').on('click', function () {
    thermostat.up();
    updateTemperature();
    // $('#temperature').text(thermostat.getCurrentTemperature());

  })
  $('#temperature-down').click(function () {
    thermostat.down();
    updateTemperature();
    // $('#temperature').text(thermostat.getCurrentTemperature());
  })

  $('#temperature-reset').click(function () {
    thermostat.resetTemp();
    updateTemperature();
  })

  $('#powersaving-on').click(function () {
    thermostat.turnOnPowerSaving();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function () {
    thermostat.turnOffPowerSaving();
    $('#power-saving-status').text('off')
    updateTemperature();
  })
  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function (data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

  $('#select-city').submit(function (event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })


  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#energy-usage-status').attr('class', thermostat.energyUsage());
    $('#energy-usage-status').text(thermostat.energyUsage());
  }
})
