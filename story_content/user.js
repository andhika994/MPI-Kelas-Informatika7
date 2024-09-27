function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5fvmmt4DSJa":
        Script1();
        break;
      case "6iujZvpNhmK":
        Script2();
        break;
      case "5ugw9xL1ZoF":
        Script3();
        break;
  }
}

function Script1()
{
  if (typeof(window.audio) === 'undefined' || window.audio.paused) {
    window.audio = new Audio('story_content/backsound.mp3');
    window.audio.loop = true;
    window.audio.play();
}
}

function Script2()
{
  if (window.audio && !window.audio.paused) {
    window.audio.pause();
    window.audio.currentTime = 0;
}

}

function Script3()
{
  // Mendefinisikan elemen untuk masuk ke fullscreen (dalam hal ini elemen body)
var elem = document.documentElement;

// Cek apakah browser sedang dalam mode fullscreen
if (!document.fullscreenElement) {
    // Memasuki mode fullscreen
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari dan Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }
} else {
    // Keluar dari mode fullscreen jika sudah dalam fullscreen
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari dan Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

}

