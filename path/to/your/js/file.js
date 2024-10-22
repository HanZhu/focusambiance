const preSelectedMusicVideos = [
  // Add 100 video IDs here
  'dQw4w9WgXcQ', 'ZZ5LpwO-An4', 'y6120QOlsfU', // ... (add more)
];

const preSelectedNoMusicVideos = [
  // Add 100 video IDs here
  'q8kxKvSQ7MI', 'DYzT-Pk6Ogw', 'f77SKdyn-1Y', // ... (add more)
];

let videoSelectionCount = 0;
const PRE_SELECTED_LIMIT = 3;

function getRandomPreSelectedVideo(withMusic) {
  const videos = withMusic ? preSelectedMusicVideos : preSelectedNoMusicVideos;
  const randomIndex = Math.floor(Math.random() * videos.length);
  return videos[randomIndex];
}

async function selectVideo(withMusic = true) {
  videoSelectionCount++;
  
  if (videoSelectionCount <= PRE_SELECTED_LIMIT) {
    return getRandomPreSelectedVideo(withMusic);
  } else {
    return await selectVideoFromAPI(withMusic);
  }
}

async function selectVideoFromAPI(withMusic) {
  // Your existing API call logic here
  // Make sure to implement proper error handling and retries
  // ...
}

async function playVideo(withMusic = true) {
  const videoId = await selectVideo(withMusic);
  if (videoId) {
    player.loadVideoById(videoId);
  } else {
    console.error('Failed to select a video');
    // Handle error (maybe try again or show a message to the user)
  }
}

document.getElementById('startButton').addEventListener('click', () => {
  const withMusic = document.getElementById('musicToggle').checked;
  playVideo(withMusic);
});

document.getElementById('changeVideoButton').addEventListener('click', () => {
  const withMusic = document.getElementById('musicToggle').checked;
  playVideo(withMusic);
});

document.getElementById('musicToggle').addEventListener('change', () => {
  videoSelectionCount = 0;
  // Other logic for handling music toggle...
});
