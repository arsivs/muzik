window.onload = function() {
	var id = window.self.location.href.split("-").pop();
	yt_search( base64De(id) );
}

function yaz(items){
	var yaz = document.getElementById("yaz");
	items.forEach(function(item, i) {
		var liste = yaz.querySelector('.liste').cloneNode(true);
		if(i == 0)
			yaz.innerText = ""; //yaz.appendChild(liste.cloneNode(true));
		liste.querySelector('.sol b').innerText = item.title;
		liste.querySelector('.sag .sure').innerText = item.duration;
		liste.querySelector('.sol span i').innerText = item.popularity;
		liste.querySelector('.sol span u').innerText = item.date;
		liste.querySelector('.sag a').href = item.url;
		yaz.appendChild(liste);
	});
}

function include(url) {
	var script  = document.createElement('script');
	script.src  = url;
	script.type = 'text/javascript';
	script.defer = true;
	document.getElementsByTagName('head').item(0).appendChild(script);
}

include("//arsivs.github.io/muzik/script/yt_search.js");
include("//arsivs.github.io/muzik/script/temizle.js");
include("//arsivs.github.io/muzik/script/plugins.js");