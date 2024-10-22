const preSelectedMusicVideos = [
  // Add 200-300 high-quality, likely ad-free video IDs here
  'dQw4w9WgXcQ', 'ZZ5LpwO-An4', 'y6120QOlsfU', // ... (add more)
];

const preSelectedNoMusicVideos = [
  // Add 200-300 high-quality, likely ad-free video IDs here
  'q8kxKvSQ7MI', 'DYzT-Pk6Ogw', 'f77SKdyn-1Y', // ... (add more)
];

let videoSelectionCount = 0;
const PRE_SELECTED_LIMIT = 5; // Increased from 3 to 5
let currentPlayer;
let nextPlayer;

function getRandomPreSelectedVideo(withMusic) {
  const videos = withMusic ? preSelectedMusicVideos : preSelectedNoMusicVideos;
  const randomIndex = Math.floor(Math.random() * videos.length);
  return videos[randomIndex];
}

function createPlayer(videoId, containerId) {
  return new Promise((resolve) => {
    new YT.Player(containerId, {
      height: '100%',
      width: '100%',
      videoId: videoId,
      playerVars: {
        'autoplay': 0,
        'controls': 0,
        'mute': 1,
        'loop': 1,
        'playlist': videoId
      },
      events: {
        'onReady': (event) => resolve(event.target)
      }
    });
  });
}

async function preloadNextVideo(withMusic) {
  const nextVideoId = getRandomPreSelectedVideo(withMusic);
  const nextContainerId = 'next-video-container';
  
  // Create a hidden container for the next video if it doesn't exist
  if (!document.getElementById(nextContainerId)) {
    const container = document.createElement('div');
    container.id = nextContainerId;
    container.style.display = 'none';
    document.body.appendChild(container);
  }

  nextPlayer = await createPlayer(nextVideoId, nextContainerId);
}

async function playVideo(withMusic = true) {
  videoSelectionCount++;
  
  if (videoSelectionCount <= PRE_SELECTED_LIMIT) {
    const videoId = getRandomPreSelectedVideo(withMusic);
    
    if (!currentPlayer) {
      currentPlayer = await createPlayer(videoId, 'video-container');
    } else {
      currentPlayer.loadVideoById(videoId);
    }
    
    currentPlayer.unMute();
    currentPlayer.playVideo();
    
    // Check for ads and switch if necessary
    checkForAdsAndSwitch(currentPlayer, withMusic);
    
    // Preload next video
    preloadNextVideo(withMusic);
  } else {
    // Fallback to API selection if we've exceeded the pre-selected limit
    const videoId = await selectVideoFromAPI(withMusic);
    if (videoId) {
      currentPlayer.loadVideoById(videoId);
      currentPlayer.playVideo();
    } else {
      console.error('Failed to select a video');
      // Handle error (maybe try again or show a message to the user)
    }
  }
}

function checkForAdsAndSwitch(player, withMusic) {
  const adCheckInterval = setInterval(() => {
    if (player.getAdState() === 1) { // Ad is playing
      console.log("Ad detected, switching to next video");
      clearInterval(adCheckInterval);
      switchToNextVideo(withMusic);
    } else if (player.getPlayerState() === 1) { // Video is playing
      console.log("No ad detected, playing video");
      clearInterval(adCheckInterval);
    }
  }, 500); // Check every 500ms

  // Clear interval after 10 seconds if neither condition is met
  setTimeout(() => clearInterval(adCheckInterval), 10000);
}

async function switchToNextVideo(withMusic) {
  if (nextPlayer) {
    // Swap current and next players
    const tempPlayer = currentPlayer;
    currentPlayer = nextPlayer;
    nextPlayer = tempPlayer;

    // Play the new current video
    currentPlayer.unMute();
    currentPlayer.playVideo();

    // Preload the next video
    preloadNextVideo(withMusic);
  } else {
    // If nextPlayer is not ready, just play a new video
    playVideo(withMusic);
  }
}

// Modify existing event listeners
document.getElementById('startButton').addEventListener('click', () => {
  const withMusic = document.getElementById('musicToggle').checked;
  playVideo(withMusic);
});

document.getElementById('changeVideoButton').addEventListener('click', () => {
  const withMusic = document.getElementById('musicToggle').checked;
  videoSelectionCount = 0; // Reset count when manually changing video
  playVideo(withMusic);
});

document.getElementById('musicToggle').addEventListener('change', () => {
  videoSelectionCount = 0;
  // Other logic for handling music toggle...
});
