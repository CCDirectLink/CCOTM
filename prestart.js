ig.module("impact.feature.bgm.old-title-music")
  .requires("impact.feature.bgm.bgm")
  .defines(function () {
    ig.merge(ig.BGM_TRACK_LIST, {
      title: {
        path: "media/bgm/menu.ogg",
        loopEnd: 36,
        volume: 0.45,
      },
    });

    ig.Bgm.preloadStartTrack("title");
  });
