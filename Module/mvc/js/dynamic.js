/**
 * @author Frank Klomfas
 */
$(document).ready(function(){
	$.get('views/addpic.php/', function(data){
		console.log(data);
		$('main').append(data);
	});
});
