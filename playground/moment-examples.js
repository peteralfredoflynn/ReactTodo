var moment = require('moment');

//returns a formatted string
console.log(moment().format());

var now = moment();

console.log('Current timesstamp', now.unix());

// convert timestamp
var timestamp = now.unix();
var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format('MMM Do, YYYY @ H:mm a'));
