(function() {
	function read_cookie(key) {
		var result;
		return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
	}
	var utma_string = read_cookie("__utma");
	var utmz_string = read_cookie("__utmz");
	var ga = {};
	if (utma_string && utmz_string) {
		var utma = utma_string.split(".");
		var vals = (function() {
			var pairs = utmz_string.split('.').slice(4).join('.').split('|');
			var gaa = {};
			for (var i = 0; i < pairs.length; i++) {
				var temp = pairs[i].split('=');
				gaa[temp[0]] = temp[1];
			}
			return gaa;
		})();

		ga = {
			'traffic_source': {
				'source': (vals.utmgclid) ? "google" : vals.utmcsr,
				'medium': (vals.utmgclid) ? "cpc" : vals.utmcmd,
				'campaign': vals.utmccn,
				'content': vals.utmcct,
				'term': vals.utmctr
			},
			'domain_hash': utma[0],
			'visitor_id': utma[1],
			'first_visit': new Date(utma[2] * 1000),
			'previous_visit': new Date(utma[3] * 1000),
			'current_visit': new Date(utma[4] * 1000),
			'visit_count': +utma[5],
			'session_hit_count': +read_cookie('__utmb').split('.')[1]
		};
	}
	window.GoogleAnalyticsCookie = ga;
} ());
