var site = [];
site[0] = {
		'url' 					: 'index',
		'title'					: 'startseite',
		'background' 		: '',
		'basistemplate'	: '',
		'description'		: 'Über diese Seite', // max 255 Zeichen
		'index'					: 'index', //noindex,
		'follow'				: 'follow', //nofollow,
		'mainnav'				: true,
		'footernav'			: false
};
site[1] = {
	'url' 					=> 'fotoagrie',
	'title'					=> 'Fotografien von Frank Klomfas',
	'background' 		=> '',
	'basistemplate'	=> '',
	'description'		=> 'Über diese Seite', // max 255 Zeichen
	'index'					=> 'index', //noindex,
	'follow'				=> 'follow', //nofollow,
	'mainnav'				=> true,
	'footernav'			=> false
};
site[2] = {
	'url' 					=> 'kontakt',
	'title'					=> 'Kontaktformular',
	'background' 		=> '',
	'basistemplate'	=> '',
	'description'		=> 'Über diese Seite', // max 255 Zeichen
	'index'					=> 'noindex', //noindex,
	'follow'				=> 'nofollow', //nofollow,
	'mainnav'				=> true,
	'footernav'			=> true
};
site[3] = {
	'url' 					=> 'impressum',
	'title'					=> 'Impressum',
	'background' 		=> '',
	'basistemplate'	=> '',
	'description'		=> 'Über diese Seite', // max 255 Zeichen
	'index'					=> 'noindex', //noindex,
	'follow'				=> 'nofollow', //nofollow,
	'mainnav'				=> false,
	'footernav'			=> true
};
site[4] = {
	'url' 					=> 'agb',
	'title'					=> 'AGB',
	'background' 		=> '',
	'basistemplate'	=> '',
	'description'		=> 'Über diese Seite', // max 255 Zeichen
	'index'					=> 'noindex', //noindex,
	'follow'				=> 'nofollow', //nofollow,
	'mainnav'				=> false,
	'footernav'			=> true
}

console.log(site);
