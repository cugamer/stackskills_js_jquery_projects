$(document).ready(function() {
	$('#submit').on('click', function() {
		var name = $('#name').val();
		var shout = $('#shout').val();
		var date = getDate();
		var dataString = 'name=' + name + '&shout=' + shout + '&date=' + date;
		console.log(date);
		if(name == '' || shout == '') {
			alert("Please enter your name and something to shout");
		} else {
			$.ajax({
				type: 'POST',
				url: '../shoutbox/shoutbox.php',
				data: dataString,
				cache: false,
				success: function(html) {
					$('#shouts ul').prepend(html);
				}
			});
		}

		return false;
	});
});

function getDate() {
	var date;
	date = new Date;
	date = date.getUTCFullYear() + '-' +
				('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
				('00' + date.getUTCDate()).slice(-2) + ' ' + 
				('00' + date.getUTCHours()).slice(-2) + ':' +
				('00' + date.getUTCMinutes()).slice(-2) + ':' +
				('00' + date.getUTCSeconds()).slice(-2);
				console.log("called")
}