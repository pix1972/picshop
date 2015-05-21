<?php
    var_dump($_FILES);
	//validiere auf jpg
	if(preg_match('/jpeg$/', $_FILES['upload']['type'])) {
		echo 'Format';
	} else {
		echo 'Falsches Format';
	}
?>