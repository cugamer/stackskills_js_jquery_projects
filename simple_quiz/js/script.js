function submitAnswers() {
	var total = 5;
	var score = 0;

	// Get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	// Validation
	// inputs = [q1, q2, q3, q4, q5];
	// for(var i = 0; i < inputs.length; i++) {
	// 	if(inputs[i] == "" || inputs[i] == null) {
	// 		alert("Please answer all questions prior to submitting");
	// 		break;
	// 	}
	// }

	for(var i = 1; i <= total; i++) {
		if(eval('q' + i) == null || eval('q' + i) == "") {
			alert("You missed question " + i);
			// Catches submission prior to it going through
			return false;
		}
	}

	// Set correct answers
	var answers = ["b", "a", "d", "b", "d"];

	// Check answers
	// if(q1 == answers[0]) {
	// 	score++;
	// }
	// if(q2 == answers[0]) {
	// 	score++;
	// }
	// if(q3 == answers[0]) {
	// 	score++;
	// }
	// if(q4 == answers[0]) {
	// 	score++;
	// }
	// if(q5 == answers[0]) {
	// 	score++;
	// }

	for(var i = 1; i <= total; i++) {
		var curentQuestion = eval('q' + i);
		if(curentQuestion == answers[i - 1]){
			score++;
		}
	}

	// Display results
	var results = document.getElementById('results');
	results.innerHTML = "<h3>You scored <span>" + score + "</span> out of <span>" + total + "</span></h3>";
	// alert("You scored " + score + " out of " + total);
	return false;
}