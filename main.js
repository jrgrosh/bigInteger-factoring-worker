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
			type: "WORK_INFO",
			startIndex: 3,
			stopIndex: "143",
			product: "143"
		});

		/*
		let a = 0;
		let b = 0
		while(a<100000){
			b = 0
			while(b<100000){
				b+=1
			}
			a+=1
		}

		*/
		myWorker.postMessage({
			type: "WORK_REQUEST"
		});
		/*

		myWorker.postMessage({
			type: "progress"
		});*/
	  console.log('Message posted to worker');
	};


	myWorker.onmessage = function(e) {
		console.log(e);

		result.textContent = "The factors be " + e.data.p + " and " + e.data.q + ".";
		console.log('Message received from worker');
	};
}
