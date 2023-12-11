// Replace YOUR_API_KEY with your actual API key
const apiKey = 'AIzaSyDAN5YHupVlxxrqXsiK3tALbB5uRjVwYKI';
const videoId = 'VIRmEpfuRck';

// Load YouTube API script
function onYouTubeIframeAPIReady() {
  const player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: videoId,
    playerVars: {
      'autoplay': 1,
      'controls': 1,
      'rel': 0,
      'showinfo': 0,
      'modestbranding': 1
    },
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

// Load YouTube API
function loadYouTubeAPI() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Load YouTube API on page load
window.onload = loadYouTubeAPI;