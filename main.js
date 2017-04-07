var first = document.querySelector('#number1');
var second = document.querySelector('#number2');
var third = document.querySelector('#button1');
var result = document.querySelector('.result');

if (window.Worker) { // Check if Browser supports the Worker api.
	// Requires script name as input
	var myWorker = new Worker("worker.js");

// onkeyup could be used instead of onchange if you wanted to update the answer every time
// an entered value is changed, and you don't want to have to unfocus the field to update its .value
  /*
	first.onchange = function() {
	  myWorker.postMessage([first.value,second.value]); // Sending message as an array to the worker
	  console.log('Message posted to worker');
	};

	second.onchange = function() {
	  myWorker.postMessage([first.value,second.value]);
	  console.log('Message posted to worker');
	};
	*/
	//15485867	15486277
	//991 * 997
	third.onclick = function() {
		myWorker.postMessage({
			type: "search",
			start: 3,
			finish: "1050809356352027836051",
			product: "1050809356352027836051"
		});
		let a = 0;
		let b = 0
		while(a<100000000){
			while(b<10000000){
				b+=1
			}
			a+=1
		}
		myWorker.postMessage({
			type: "progress"
		});
	  console.log('Message posted to worker');
	};


	myWorker.onmessage = function(e) {
		result.textContent = e.data;
		console.log('Message received from worker');
	};
}
