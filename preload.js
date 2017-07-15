function select_language(language) {

	let localizedStrings = document.getElementsByClassName("localizedString");

	for (i = 0; i < localizedStrings.length; i++) {
		let string = localizedStrings[i];
		if (string.lang == language)
			string.style.display = 'inline-block';
		else
			string.style.display = 'none';
	}

	var now = new Date();
	var expireTime = now.getTime() + 30 * 24 * 60 * 60 * 1000;
	var expireDate = new Date(expireTime);
	
	document.cookie = 'language=' + language + '; expires=' + expireDate.toGMTString();
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

var language = getCookie('language') || 'en-us';