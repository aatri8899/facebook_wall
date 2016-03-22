$(document).ready(function()
{
	$('#message').focus();


	// YOUR CODE GOES HERE
	$("#post-btn").click(function() {
		var text = $("#message").val();
	     $("#wall").append("<div>" + "<img src='http://www.scass.ae/en/About1/PublishingImages/Pages/staff/nophoto.jpg'>" + text  + "</div>");

		  $("img").width(150);
		   $("img").css("margin-right", 20);
	});
});