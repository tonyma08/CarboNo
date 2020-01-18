function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function genDailyTipOrder(messageCount) {
	var order = [];
	for(var i = 0; i < messageCount; i++) {
		order.push(i);
	}
	shuffleArray(order);
	return order;
}

window.onload = function() {
	console.log("Hi");
	messages = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];

	// If no order (every tip was seen already or first run), restart
	if(localStorage.getItem('daily-tip-order') === null) {
		var order = genDailyTipOrder(messages.length);
		localStorage.setItem('daily-tip-order', order.join(" "));
	}
	
	// Initialize for first run
	if(localStorage.getItem('daily-tip-index') === null) {
		localStorage.setItem('daily-tip-index', 0);
	}

	else {
		var newIndex = parseInt(localStorage.getItem('daily-tip-index')) + 1;
		// After seeing every message, discard the order
		if(newIndex == messages.length) {
			localStorage.setItem('daily-tip-index', 0);
			localStorage.removeItem('daily-tip-order');
		}
		else {
			localStorage.setItem('daily-tip-index', newIndex);
		}
	}
	
	// Start over if the amount of tips changes
	if(messages.length !== parseInt(localStorage.getItem('daily-tip-order').split(" ").length)) {
		localStorage.removeItem('daily-tip-index');
		localStorage.removeItem('daily-tip-order');
	}
	
	// Read order and show the next tip from there
	tip = messages[localStorage.getItem('daily-tip-order').split(" ")[localStorage.getItem('daily-tip-index')]];
	document.getElementsByClassName("daily-tip")[0].innerHTML = tip;
};