import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

const seconds = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(seconds);
