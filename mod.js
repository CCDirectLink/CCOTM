(function() {
	const onModsLoaded = function() {
	cc.ig.BGM[entries.titleMusic] = new cc.ig.BGMTrack("title");
	document.body.removeEventListener("modsLoaded", onModsLoaded);
	};

	document.body.addEventListener("modsLoaded", onModsLoaded);
})()
