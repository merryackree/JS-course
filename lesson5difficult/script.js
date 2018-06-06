var date = new Date();

var options = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',

};

document.write( date.toLocaleString(options) );
