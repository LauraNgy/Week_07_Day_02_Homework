const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentSelect = require('./views/instrument_select.js');
const InstrumentDisplay = require('./views/instrument_display.js');


document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('#instrument-families');
  const instrumentSelect = new InstrumentSelect(selectElement);
  instrumentSelect.bindEvents();

  const displayElement = document.querySelector('#instrument-display');
  const instrumentDisplay = new InstrumentDisplay(displayElement);
  instrumentDisplay.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();
});
