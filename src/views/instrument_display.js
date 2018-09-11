const PubSub = require('../helpers/pub_sub.js');

const InstrumentDisplay = function (element) {
  this.element = element;
};

InstrumentDisplay.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:instrument-detail', (event) => {
    const instrument = event.detail;
    this.render(instrument);
  });
};

InstrumentDisplay.prototype.newElement = function (tagName, parentName) {
  const newElem = document.createElement(tagName);
  parentName.appendChild(newElem);
  return newElem;
};

InstrumentDisplay.prototype.render = function (instrument) {
  const parent = this.element;
  this.element.innerHTML = '';
  console.log(parent);
  const instrumentHead = this.newElement('h2', parent);
  instrumentHead.textContent = instrument.name;
  const instrumentDesc = this.newElement('p', parent);
  instrumentDesc.textContent = instrument.description;
  const instrumentsList = this.newElement('ul', parent);
  instrumentsList.textContent = "Here's a list of instruments in this family:"
  const instruments = instrument.instruments;
  instruments.forEach( (instrument) => {
    const newInstrument = this.newElement('li', instrumentsList);
    newInstrument.textContent = instrument;
  });
};

module.exports = InstrumentDisplay;
