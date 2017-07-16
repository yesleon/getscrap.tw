

var language = getCookie('language') || 'en-us';
console.log(document.cookie);
function select_language(language) {

	var localizedStrings = document.getElementsByClassName("localizedString");

	for (i = 0; i < localizedStrings.length; i++) {
		var string = localizedStrings[i];
		if (string.lang == language)
			string.style.display = 'inline-block';
		else
			string.style.display = 'none';
	}

	var now = new Date();
	var expireTime = now.getTime() + 30 * 24 * 60 * 60 * 1000;
	var expireDate = new Date(expireTime);
	
	document.cookie = 'language=' + language + '; expires=' + expireDate.toGMTString() + '; path=/';
	console.log(document.cookie);
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

var headHTML = `
	<title>
		Scrap
	</title>
	<link rel="stylesheet" type="text/css" href="/shared.css">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="apple-touch-icon" href="/assets/favicon/apple-icon.png">
	<link rel="apple-touch-icon" sizes="57x57" href="/assets/favicon/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/assets/favicon/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/assets/favicon/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/assets/favicon/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/assets/favicon/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/assets/favicon/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/assets/favicon/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/assets/favicon/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="/assets/favicon/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">
	<link rel="manifest" href="/assets/favicon/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/assets/favicon/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
`
document.write(headHTML);


var navbarHTML = `
<nav id="navbar">
	<ul>	
		<li>
			<a href="/"><img src="/assets/scrapLogoThumbnail.png"></a>
		</li>
		
		<li>
			<a href="/blog">
				<span class="localizedString" lang="en-us">
					Blog
				</span>
				<span class="localizedString" lang="zh-hant">
					部落格
				</span>
			</a>
		</li>
		
		<li>
			<a href="/support">
				<span class="localizedString" lang="en-us">
					Support
				</span>
				<span class="localizedString" lang="zh-hant">
					支援
				</span>
			</a>
		</li>
	
	</ul>
</nav>
`
	
var siteFooterHTML = `
	<footer id="siteFooter">
		<p>
			<span class="localizedString" lang="en-us">
				Made with <span style="color: red">&hearts;</span> by <a href="mailto:yesleon@me.com">Li-Heng</a>
			</span>
			<span class="localizedString" lang="zh-hant">
				由<a href="mailto:yesleon@me.com">立衡</a>用<span style="color: red">&hearts;</span>製作
			</span>
		</p>
		
		<p>
			<select id="languageList" onchange="select_language(this.options[this.selectedIndex].value)">
				<option value="en-us">English</option>
				<option value="zh-hant">繁體中文</option>
			</select>
		</p>
	</footer>
`
