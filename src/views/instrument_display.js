const PubSub = require('../helpers/pub_sub.js');

const InstrumentDisplay = function () {
};

InstrumentDisplay.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:instrument-detail', (event) => {
    console.log(event.detail);
  });
};

module.exports = InstrumentDisplay;
