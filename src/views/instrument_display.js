const PubSub = require('../helpers/pub_sub.js');
const CreateAppend = require('../helpers/create_append.js');

const InstrumentDisplay = function (element) {
  this.element = element;
};

InstrumentDisplay.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:instrument-detail', (event) => {
    const instrument = event.detail;
    this.render(instrument);
  });
};

// InstrumentDisplay.prototype.newElement = function (tagName, parentName) {
//   const newElem = document.createElement(tagName);
//   parentName.appendChild(newElem);
//   return newElem;
// };

InstrumentDisplay.prototype.render = function (instrument) {
  const parent = this.element;
  this.element.innerHTML = '';
  const instrumentHead = new CreateAppend('h2', instrument.name, parent);
  const instrumentDesc = new CreateAppend('p', instrument.description, parent);
  const instrumentsList = new CreateAppend('ul', "Here'a a list of instruments in this family:", parent);
  const instruments = instrument.instruments;
  instruments.forEach( (instrument) => {
    const newInstrument = new CreateAppend('li', instrument, instrumentsList);
  });
};

module.exports = InstrumentDisplay;
