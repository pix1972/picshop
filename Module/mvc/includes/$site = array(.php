$site = array(
	'startseite' = array(
		'url' 					=> 'index',
		'title'					=> 'Startseite',
		'background' 		=> '',
		'basistemplate'	=> '',
		'description'		=> 'Über diese Seite', // max 255 Zeichen
		'index'					=> 'index', //noindex,
		'follow'				=> 'follow', //nofollow,
		'mainnav'				=> true,
		'footernav'			=> false
	),
	'fotografie'	= array(
		'url' 					=> 'fotoagrie',
		'title'					=> 'Fotografien von Frank Klomfas',
		'background' 		=> '',
		'basistemplate'	=> '',
		'description'		=> 'Über diese Seite', // max 255 Zeichen
		'index'					=> 'index', //noindex,
		'follow'				=> 'follow', //nofollow,
		'mainnav'				=> true,
		'footernav'			=> false
	),
	'kontakt'	= array(
		'url' 					=> 'kontakt',
		'title'					=> 'Kontaktformular',
		'background' 		=> '',
		'basistemplate'	=> '',
		'description'		=> 'Über diese Seite', // max 255 Zeichen
		'index'					=> 'noindex', //noindex,
		'follow'				=> 'nofollow', //nofollow,
		'mainnav'				=> true,
		'footernav'			=> true
	),
	'impressum'	= array(
		'url' 					=> 'impressum',
		'title'					=> 'Impressum',
		'background' 		=> '',
		'basistemplate'	=> '',
		'description'		=> 'Über diese Seite', // max 255 Zeichen
		'index'					=> 'noindex', //noindex,
		'follow'				=> 'nofollow', //nofollow,
		'mainnav'				=> false,
		'footernav'			=> true
	),
	'agb'	= array(
		'url' 					=> 'agb',
		'title'					=> 'AGB',
		'background' 		=> '',
		'basistemplate'	=> '',
		'description'		=> 'Über diese Seite', // max 255 Zeichen
		'index'					=> 'noindex', //noindex,
		'follow'				=> 'nofollow', //nofollow,
		'mainnav'				=> false,
		'footernav'			=> true
	),
);

echo json_encode($site);
