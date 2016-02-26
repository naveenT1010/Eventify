document.addEventListener('DOMContentLoaded', function () {
	var submitBtn = document.getElementById('btn');
	var user = new String("");
	var subject = new String("");
	var date = new String("");
	var time = new String("");
	var venue = new String("");

	chrome.storage.local.get("subject", function(data) {
		    document.getElementById("subject").value = data.subject;
		    subject = data.subject;
	});
	chrome.storage.local.get("date", function(data) {
		    document.getElementById("date").value = data.date;
		    date = data.date;
	});
	chrome.storage.local.get("time", function(data) {
		    document.getElementById("time").value = data.time;
		    time = data.time;
	});
	chrome.storage.local.get("venue", function(data) {
		    document.getElementById("venue").value = data.venue;
		    venue = data.venue;
	});

	document.getElementById("name").addEventListener('blur',function(){
		user = document.getElementById("name").value;
		user = user.toLowerCase();
	});

    submitBtn.addEventListener('click', function(){
    	var firebaseLink = "https://eventifycodeio.firebaseio.com/"+user;
    	var	myDataRef = new Firebase(firebaseLink);
    	myDataRef.push({subject:subject, date:date, time:time, venue:venue});
    });
});

// document.addEventListener('DOMContentLoaded', function () {

// 	 chrome.runtime.sendMessage({need: "d"}, function(value) {
// 	 		alert(value);
// 	        document.getElementById("d").innerHTML = value;
// 	 });

// 	 chrome.runtime.sendMessage({need: "t"}, function(value) {
// 	        document.getElementById("t").innerHTML = value;
// 	 });

// 	 chrome.runtime.sendMessage({need: "v"}, function(value) {
// 	        document.getElementById("v").innerHTML = value;
// 	 });

// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// 	    chrome.runtime.sendMessage(tabs[0].id, {type: "needArray"}, function(array) {
// 	    	alert("start");
// 	        document.getElementById("d").innerHTML = "MAN U";
// 	    });
// 	});

// });
