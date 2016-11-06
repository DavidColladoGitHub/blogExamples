//Let's create a fake sleep function. Just a while loop that stops after x milliseconds
function sleep(milliseconds) {
  var start = new Date().getTime();
  while ((new Date().getTime() - start) < milliseconds) {
	
  }
}

onmessage = function (oEvent) {
	var startProcess = new Date().getTime();
				
	//We simulate a heavy process
	sleep(1000);
	
	var processTotalTime = new Date().getTime() - startProcess ;
	
	postMessage(processTotalTime);
}