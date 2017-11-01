# Installation

	npm install p-bar

# Usage

	var pBar = require('p-bar');
	var myPBar = pBar.init(100);

	myPBar.print();
	while(!myPBar.complete()) {
	  var progress = doMoreWork();
	  myPBar.increment(progress);
	  myPBar.print();
	}
