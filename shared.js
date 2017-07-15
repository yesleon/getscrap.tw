function select_language(language) {

	let localizedStrings = document.getElementsByClassName("localizedString");

	for (i = 0; i < localizedStrings.length; i++) {
		let string = localizedStrings[i];
		if (string.lang == language)
			string.style.display = 'inline-block';
		else
			string.style.display = 'none';
	}

}
