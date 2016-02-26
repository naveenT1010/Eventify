function getContent(){
	var messageBody = window.frames.document.body.getElementsByTagName('pre')[0].innerHTML.toString();
	var venue = new String("");
	var date = new String("");
	var time = new String("");
	var matchVenue = /venue|place/i.exec(messageBody);
	var matchDate = /date/i.exec(messageBody);
	var matchTime = /time|timing/i.exec(messageBody);
	var subject = document.getElementsByTagName('td')[10].innerText;

	var i=0;
	if(matchVenue)
		while( i < 25 && messageBody[matchVenue.index + 7 + i] != "\n"){
			venue = venue.concat(messageBody[matchVenue.index + 7 + i]);
			i++;
		}
	i=0;
	if(matchDate)
		while( i < 20 && messageBody[matchDate.index + 7 + i] != "\n"){
			date = date.concat(messageBody[matchDate.index + 7 + i]);
			i++;
		}
	i=0;
	if(matchTime)
		while( i < 25 && messageBody[matchTime.index + 7 + i] != "\n"){
			time = time.concat(messageBody[matchTime.index + 7 + i]);
			i++;
		}
    chrome.storage.local.set({subject:subject});
	chrome.storage.local.set({date:date});
	chrome.storage.local.set({time:time});
	chrome.storage.local.set({venue:venue});
}


getContent();
// chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
// 	switch(request.need){
// 		case "date": sendResponse(getContent("d"));
// 					 break;
// 		case "time": sendResponse(getContent("t"));
// 					 break;
// 		case "venue": sendResponse(getContent("v"));
// 					  break;
// 	}
// });
	// chrome.runtime.sendMessage(document.getElementsByTagName('pre')[0].innerText);
// chrome.runtime.sendMessage(document.getElementsByTagName('td')[10].innerText);
// chrome.runtime.sendMessage(document.getElementsByTagName('td')[12].innerText);
// chrome.runtime.sendMessage(document.getElementsByTagName('td')[14].innerText);
