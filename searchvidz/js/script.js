// Searchbar handler

$(function() {
	var searchField = $('#query');
	var icon = $('#search-btn');

	// Focus event handler
	$(searchField).on('focus', function() {
		$(this).animate({
			width: "100%"
		}, 400);
		$(icon).animate({
			right: "10px"
		}, 400);
	});

	// Blur event handler
	$(searchField).on('blur', function() {
		if(searchField.val() == '') {
			$(searchField).animate({
				width: "45%"	
			}, 400, function() {});
			$(icon).animate({
				right: "360px"	
			}, 400, function() {});
		}
	});

	$('#search-form').submit(function(e){
		e.preventDefault();
	});
});

function search() {
	// Clear results
	$('#results').html('');
	$('#buttons').html('');

	// Get form input
	var q = $("#query").val();

	// Run GET request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search",
		{
			part: 'snippet, id',
			q: q,
			type: 'video',
			key: youtubeApiKey
		},
		function(data) {
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;

			$.each(data.items, function(i, item) {
				var output = getOutput(item);
				$('#results').append(output);
			});
		}
	);
}

function getOutput(){

}