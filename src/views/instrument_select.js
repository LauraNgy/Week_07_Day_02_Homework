const PubSub = require('../helpers/pub_sub.js');

const InstrumentSelect = function (element) {
  this.element = element;
};

InstrumentSelect.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:instruments-ready', (event) => {
    const instruments = event.detail;
    this.populate(instruments);

  });
};

InstrumentSelect.prototype.newElement = function (tagName, parentName) {
  const newElem = document.createElement(tagName);
  parentName.appendChild(newElem);
  return newElem;
};

InstrumentSelect.prototype.populate = function(instruments){
  instruments.forEach( (instrument, index) => {
    const option = this.newElement('option', this.element);
    option.textContent = instrument.name;
    option.value = index;
  });
};
module.exports = InstrumentSelect;
