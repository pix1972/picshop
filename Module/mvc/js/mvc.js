var site = [];
site[0] = {
		'name'					: 'index',
		'url' 					: 'index.html',
		'title'					: 'Startseite',
		'background' 		: '',
		'basistemplate'	: '',
		'description'		: 'Über diese Seite', // max 255 Zeichen
		'index'					: 'index', //noindex,
		'follow'				: 'follow', //nofollow,
		'mainnav'				: true,
		'footernav'			: false
};
site[1] = {
	'name'					: 'fotografie',
	'url' 					: 'fotografie.html',
	'title'					: 'Fotografien von Frank Klomfas',
	'background' 		: '',
	'basistemplate'	: '',
	'description'		: 'Über diese Seite', // max 255 Zeichen
	'index'					: 'index', //noindex,
	'follow'				: 'follow', //nofollow,
	'mainnav'				: true,
	'footernav'			: false
};
site[2] = {
	'name'					: 'kontakt',
	'url' 					: 'kontakt.html',
	'title'					: 'Kontaktformular',
	'background' 		: '',
	'basistemplate'	: '',
	'description'		: 'Über diese Seite', // max 255 Zeichen
	'index'					: 'noindex', //noindex,
	'follow'				: 'nofollow', //nofollow,
	'mainnav'				: true,
	'footernav'			: true
};
site[3] = {
	'name'					: 'impressum',
	'url' 					: 'impressum.html',
	'title'					: 'Impressum',
	'background' 		: '',
	'basistemplate'	: '',
	'description'		: 'Über diese Seite', // max 255 Zeichen
	'index'					: 'noindex', //noindex,
	'follow'				: 'nofollow', //nofollow,
	'mainnav'				: false,
	'footernav'			: true
};
site[4] = {
	'name'					: 'agb',
	'url' 					: 'agb.html',
	'title'					: 'AGB',
	'background' 		: '',
	'basistemplate'	: '',
	'description'		: 'Über diese Seite', // max 255 Zeichen
	'index'					: 'noindex', //noindex,
	'follow'				: 'nofollow', //nofollow,
	'mainnav'				: false,
	'footernav'			: true
}

var mainnav = '<ul>', footernav = '<ul>';
for (var i=0; i < site.length; i++) {

	if (site[i].mainnav === true) {
		mainnav += '<li><a href="' +
			site[i].url + '" title="' +
			site[i].title + '" data-url="' +
			site[i].name.toLowerCase() + '">' +
			Helper.ucfirst(site[i].name) + '</a></li>';
	}
	if (site[i].footernav === true) {
		footernav += '<li><a href=" ' +
			site[i].url + ' " title=" ' +
			site[i].title + ' data-url=" ' +
			site[i].name.toLowerCase() + ' ">' +
			Helper.ucfirst(site[i].name) + '</a></li>';
	}

}//for
mainnav += '</ul>', footernav += '</ul>';
$(document).ready(function(){
	var aktiveLink = Helper.getUrl(location.pathname);
	for (var i = 0; i < site.length; i++) {
		if (site[i].name == aktiveLink) {
			var aktiveSite = site[i];
		}
	}

	$('title').text(aktiveSite.title);
	$('meta[name="description"]').attr('content', aktiveSite.description);
	$('meta[name="robots"]').attr('content', aktiveSite.index + ', ' + aktiveSite.follow);


	$('.mainnav').html(mainnav);
	$('.site-footer').html(footernav);
});

