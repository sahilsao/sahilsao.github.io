var fontSize = 100;
jQuery(document).ready(function(){
		//alert("ok");
			if(_getCookie("fontSize") != null){
				var fontSize = _getCookie("fontSize");
			}else{
				var fontSize = 100;
			}
			jQuery("#fontSize").css("font-size",fontSize + "%");
});
function _getCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) {
			return _getCookieVal (j);
		}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) 
			break;
	}
	return null;
}
function _deleteCookie (name,path,domain) {
	if (_getCookie(name)) {
		document.cookie = name + "=" +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}
function _setCookie (name,value,expires,path,domain,secure) {
	var vurl = true;
	if(path != '' && path != undefined){
		vurl = validUrl(path);
	}
	if(jQuery.type(name) == "string" &&  vurl){
		document.cookie = name + "=" + escape (value) +
		((expires) ? "; expires=" + expires.toGMTString() : "") +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");
	}
}
function _getCookieVal (offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) { endstr = document.cookie.length; }
	return unescape(document.cookie.substring(offset, endstr));
}
/*********Font size resize**********/
function set_font_size(fontType){
	if(fontType == "increase"){
		if(fontSize < 110){
			fontSize = parseInt(fontSize) + 5;
		}
	}else if(fontType == "decrease"){
		if(fontSize > 90){
			fontSize = parseInt(fontSize) - 5;
		}
	}else{
		fontSize = 100;
	}
	_setCookie("fontSize",fontSize);
	jQuery("#fontSize").css("font-size",fontSize + "%");

	//var phh = $("#parentHorizontalTab").height();
	//var msh = $(".major-schemes").height();
	//var mph = $(".minister-panel").height();

	//var maxh = Math.max(Math.max(phh, msh), mph);
	//alert(maxh);
		//jQuery("#parentHorizontalTab").css("height", maxh);
		//jQuery(".major-schemes").css("height", maxh);
		//jQuery(".minister-panel").css("height", maxh);
		//$("#parentHorizontalTab").attr("height", maxh);
		//$(".major-schemes").attr("height", maxh);
		//$(".minister-panel").attr("height", maxh);
	//jQuery("#template_three_column").css("font-size",fontSize + "%");
} 
