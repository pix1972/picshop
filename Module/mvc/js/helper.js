var Helper = {
	/*
##
	URL
##
	*/

	getUrl	: function(url) {
		var stuffix = url.lastIndexOf('.html')
		if (url.lastIndexOf('.html') == -1) {
			start = 'index';
		} else {
			var urlStuff = url.substr(0, stuffix);
    	var start = urlStuff.substr(urlStuff.lastIndexOf('/') + 1);
		}

    return start;
	},
	/*
	##
		String
	##
	*/
	ucfirst : function(string) {
		if (string !== undefined)
        return string.substr(0, 1).toUpperCase() + string.substr(1, string.lenght);
	},
	underlineUcFirst : function(string) {
		var whitelist = ['-', '/', ' '];

    for(var i = 0; i <= whitelist.length; i++) {
			var stringArray = string.split(whitelist[i]);
			for (var i = 0; i < stringArray.length; i++) {
            stringArray[i] = ucfirst(stringArray[i]);
        } // for
         var newString = stringArray.join('-');
        return newString;
		}//for
	}
		/*
	##
		Number
	##
	*/
};


