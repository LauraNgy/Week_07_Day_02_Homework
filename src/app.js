const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentSelect = require('./views/instrument_select.js');


document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('#instrument-families');
  const instrumentSelect = new InstrumentSelect(selectElement);
  instrumentSelect.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();
});
