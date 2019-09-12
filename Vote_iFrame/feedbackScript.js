


function formCollect() {
	var userFeedback = prompt("We are sorry this didn't help! Can you share what you do not like?", "");

	if (userFeedback == null || userFeedback == "") {
	  txt = "User cancelled the prompt.";
	} 
	else {
	  window.alert("Thank you for your feedback!");
	  return userFeedback;
	}
}

function zapRequest(feedback, pageTitle) {
	var webhookURL = "https://hooks.zapier.com/hooks/catch/4543001/o3wjgjx/";
	var requestBuild = new XMLHttpRequest();
	var requestBody = payload={
		"Page Title": pageTitle,
		"Feedback": feedback 
	};

	requestBuild.open("POST", webhookURL,true);
  	requestBuild.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  	requestBuild.send(JSON.stringify(requestBody));
}

function bindEvent(element, eventName, eventHandler) {
        if (element.addEventListener){
            element.addEventListener(eventName, eventHandler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, eventHandler);
        }
    }

function pageTitle() {
	var pageTitle;
    bindEvent(window, 'message', function (e) {
        pageTitle = e.data;
    });
    return pageTitle;
}

// Send a message to the parent
var sendMessage = function (msg) {
    // Make sure you are sending a string, and to stringify JSON
    window.parent.postMessage(msg, '*');
};