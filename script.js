const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volume = document.getElementById('volume');

let isPlaying = false;

// Play / Pause
playBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
});

audio.addEventListener('play', () => {
  isPlaying = true;
  playBtn.textContent = '⏸';
});

audio.addEventListener('pause', () => {
  isPlaying = false;
  playBtn.textContent = '▶️';
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.value = progressPercent || 0;

  let minutes = Math.floor(audio.currentTime / 60);
  let seconds = Math.floor(audio.currentTime % 60);
  if (seconds < 10) seconds = '0' + seconds;
  currentTimeEl.textContent = `${minutes}:${seconds}`;

  let durMin = Math.floor(audio.duration / 60);
  let durSec = Math.floor(audio.duration % 60);
  if (durSec < 10) durSec = '0' + durSec;
  durationEl.textContent = isNaN(audio.duration) ? '0:00' : `${durMin}:${durSec}`;
});

// Seek
progress.addEventListener('input', () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// Volume
volume.addEventListener('input', () => {
  audio.volume = volume.value;
});
