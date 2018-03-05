

var assign = require('object-assign');

var goo = require('./goo');

module.exports = assign({}, goo, {
	//backgroundColor:'#000',
  
  width:450,
  boxSizing: 'border-box',
  fontSize: '20px',
  textAlign: 'left',

});
