/**
 * @author Frank Klomfas
 */
$(document).ready(function(){
	$.get('viewsaddpic.php/', function(data){
		console.log(data);
	});
});
