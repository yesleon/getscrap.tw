let posts = tumblr_api_read['posts'];

for (var index = 0; index < posts.length; index++) {
	let post = posts[index];
	let unixTimestamp = post['unix-timestamp'];
	let date = new Date(unixTimestamp * 1000);
	let dd = date.getDate();
	let mm = date.getMonth() + 1;
	let yyyy = date.getFullYear();
	let formattedDateString = yyyy + '/' + mm + '/' + dd;
	let title = post['regular-title'];
	let body = post['regular-body'];
	
	let string = ''
	+ '<article class="blogPost"><header><h1>' + title + '</h1>'
	+ formattedDateString
	+ '</header>'
	
	+ body
	
	+ '</article>';
	
	document.getElementById("blogPosts").innerHTML += string;
}

