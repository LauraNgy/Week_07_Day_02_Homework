const PubSub = require('../helpers/pub_sub.js');
const CreateAppend = require('../helpers/create_append.js');

const InstrumentSelect = function (element) {
  this.element = element;
};

InstrumentSelect.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:instruments-ready', (event) => {
    const instruments = event.detail;
    this.populate(instruments);
  });

  this.element.addEventListener('change', (event) => {
    const instrumentId = event.target.value;
    PubSub.publish('InstrumentSelect:instrument-selected', instrumentId);
  });
};


InstrumentSelect.prototype.populate = function(instruments){
  instruments.forEach( (instrument, index) => {
    const option = new CreateAppend('option', instrument.name, this.element);
    option.value = index;
  });
};
module.exports = InstrumentSelect;
