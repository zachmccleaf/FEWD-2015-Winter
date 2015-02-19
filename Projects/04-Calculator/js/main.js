var $display;

$(document).ready(function() {

	$display = $(".display");

	$(".digit, .operator").on("click", onButtonPress);
	$(".equals").on("click", onCalculate);
	$(".clear").on("click", onClear);

});

//React to a button press
function onButtonPress(e) {
	var $button = $(e.currentTarget),
		action  = $button.data("action"), //look for data-action="..."
		value   = $display.val();

		if (value === "0") {
			value = action;
		} else {
			value += action;
		}

		updateDisplay(value);
}

//Evaluate user input
function onCalculate(e) {
	var equation = $display.val(),
		value;
		try {
			value = eval(equation);
		} catch(e) {
			value = "error";
		}

		updateDisplay(value);
	}

//Update display
function updateDisplay(value) {
	$display.val(value);
}

//Clear the current input

function onClear(e) {
	updateDisplay(0);
}




