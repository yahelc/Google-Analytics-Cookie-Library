function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
var utma = readCookie('__utma').split(".");
var vals = (function() {
		var pairs = readCookie('__utmz').split('.').slice(4).join('.').split('|');
		var gaa = {};
		for (var i = 0; i < pairs.length; i++) {
			var temp = pairs[i].split('=');
				gaa[temp[0]] = temp[1];
		}
		return gaa;
	})();

var ga = {
	'traffic_source':{
		'source' : (vals.utmgclid)?"google":vals.utmcsr,
		'medium' : (vals.utmgclid)?"cpc":vals.utmcmd, 
		'campaign' : vals.utmccn, 
		'content'  : vals.utmcct, 
		'term' : vals.utmctr
		},
	'domain_hash': utma[0],
	'visitor_id': utma[1],
	'first_visit': new Date(utma[2]*1000),
	'previous_visit':  new Date(utma[3]*1000),
	'current_visit': new Date(utma[4]*1000),
	'visit_count': +utma[5],
	'session_hit_count': +readCookie('__utmb').split('.')[1]
};
console.dir(ga);