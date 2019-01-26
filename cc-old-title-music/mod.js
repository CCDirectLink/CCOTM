(function() {
	const onModsLoaded = function() {
		cc.ig.BGM[entries.setTitleMusic] = function() {
			cc.ig.BGM[entries.titleMusic] = new cc.ig.BGMTrack("menu");
		};
		let id = window.setInterval(function() {
			cc.ig.BGM[entries.setTitleMusic]();
			if(cc.ig.BGM_TRACK_LIST["menu"]) {
				clearInterval(id);
				return;
			}
		}, 250);
		console.debug('Old title music loaded');
		document.body.removeEventListener("modsLoaded", onModsLoaded);
	};

	document.body.addEventListener("modsLoaded", onModsLoaded);
})()
