function loadPage() {
	document.getElementById("myTable").style.visibility="visible";

}



function start() {   
	// set hours for count downtimer 
	var hours = 48
	
	document.getElementById("myTable").style.visibility="visible";

	// Hide button after pressed
  	document.getElementById("button").style.visibility="hidden";

  	// Set message text empty
	document.getElementById("text").innerHTML = "";  

	// Set start date countdown
	var startDate = new Date(new Date().getTime() + hours * 60 * 60 * 1000);

	// Get todays date and time
	var now = new Date().getTime();

	// Calculate remaining time
	var ramainingTime = startDate - now;


	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(ramainingTime / (1000 * 60 * 60 * 24));
	var hours = Math.floor((ramainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((ramainingTime % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((ramainingTime % (1000 * 60)) / 1000);

	// Display the results
	document.getElementById("dayNum").innerHTML = days;
	document.getElementById("hourNum").innerHTML = hours;
	document.getElementById("minNum").innerHTML = minutes;
	document.getElementById("secNum").innerHTML = seconds;

	
	// Interval function
	var x = setInterval(function() {

	    now = new Date().getTime();

	    // Find the time remaining between now an the count down date
		distance = startDate - now;
	    
	    
	    // Time calculations for days, hours, minutes and seconds
	    days = Math.floor(distance / (1000 * 60 * 60 * 24));
	    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	    seconds = Math.floor((distance % (1000 * 60)) / 1000);
	    

	    // Display the result in the element 
	  	document.getElementById("dayNum").innerHTML = days;
	  	document.getElementById("hourNum").innerHTML = hours;
	  	document.getElementById("minNum").innerHTML = minutes;
	  	document.getElementById("secNum").innerHTML = seconds;

	  	
	    
	    // If the count down is over, write some text 
	    if (distance < 0) {
	        clearInterval(x);
	        document.getElementById("button").style.visibility="visible";
	        document.getElementById("myTable").style.visibility="hidden";
	        document.getElementById("text").innerHTML = "Time Expired!";
	    }
	}, 1000);
}
