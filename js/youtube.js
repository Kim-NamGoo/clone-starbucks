// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  new YT.Player("player", {
    videoId: "An6LvWQuj_8",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8",
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}

// floating element //

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatngObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: random(0, delay),
  });
}

floatngObject(".floating1", 1, 15);
floatngObject(".floating2", 0.5, 15);
floatngObject(".floating3", 1.5, 25);
