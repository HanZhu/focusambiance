const preSelectedMusicVideos = [
  'jfKfPfyJRdk', 'DWcJFNfaw9c', '5qap5aO4i9A', '7NOSDKb0HlU', 'lTRiuFIWV54',
  '36YnV9STBqc', 'MCkTebktHVc', 'n61ULEU7CO0', 'XULUBg_ZcAU', 'rUxyKA_-grg',
  'uxQHF9lNMOk', 'kgx4WGK0oNU', 'oVi5gtzTDx0', 'qvUWA45GOMg', 'GfKs8oNP9m8',
  'eFqT2bE9fHU', 'Dx5qFachd3A', 'hHW1oY26kxQ', 'Y9Y5-vJKUGM', 'Oy-s-IuqM6g',
  'zyWHPXfR3pg', 'xgHb_IfEkxg', 'VkGDKvmCJvA', 'zyWHPXfR3pg', 'xgHb_IfEkxg',
  'VkGDKvmCJvA', 'zyWHPXfR3pg', 'xgHb_IfEkxg', 'VkGDKvmCJvA', 'zyWHPXfR3pg',
  'xgHb_IfEkxg', 'VkGDKvmCJvA', 'zyWHPXfR3pg', 'xgHb_IfEkxg', 'VkGDKvmCJvA',
  'zyWHPXfR3pg', 'xgHb_IfEkxg', 'VkGDKvmCJvA', 'zyWHPXfR3pg', 'xgHb_IfEkxg',
  'VkGDKvmCJvA', 'zyWHPXfR3pg', 'xgHb_IfEkxg', 'VkGDKvmCJvA', 'zyWHPXfR3pg',
  'xgHb_IfEkxg', 'VkGDKvmCJvA', 'zyWHPXfR3pg', 'xgHb_IfEkxg', 'VkGDKvmCJvA',
  'zyWHPXfR3pg', 'xgHb_IfEkxg', 'VkGDKvmCJvA', 'zyWHPXfR3pg', 'xgHb_IfEkxg',
  'VkGDKvmCJvA', 'zyWHPXfR3pg', 'xgHb_IfEkxg', 'VkGDKvmCJvA', 'zyWHPXfR3pg',
  'xgHb_IfEkxg', 'VkGDKvmCJvA', 'zyWHPXfR3pg', 'xgHb_IfEkxg', 'VkGDKvmCJvA',
  'zyWHPXfR3pg', 'xgHb_IfEkxg', 'VkGDKvmCJvA', 'zyWHPXfR3pg', 'xgHb_IfEkxg',
  'VkGDKvmCJvA', 'zyWHPXfR3pg', 'xgHb_IfEkxg', 'VkGDKvmCJvA', 'zyWHPXfR3pg',
  'xgHb_IfEkxg', 'VkGDKvmCJvA', 'zyWHPXfR3pg', 'xgHb_IfEkxg', 'VkGDKvmCJvA',
  'zyWHPXfR3pg', 'xgHb_IfEkxg', 'VkGDKvmCJvA', 'zyWHPXfR3pg', 'xgHb_IfEkxg',
  'VkGDKvmCJvA', 'zyWHPXfR3pg', 'xgHb_IfEkxg', 'VkGDKvmCJvA', 'zyWHPXfR3pg',
  'xgHb_IfEkxg', 'VkGDKvmCJvA', 'zyWHPXfR3pg', 'xgHb_IfEkxg', 'VkGDKvmCJvA'
];

const preSelectedNoMusicVideos = [
  'mPZkdNFkNps', 'q8kxKvSQ7MI', 'eI9WoDh-2b4', 'HchoJW80jiQ', 'BHACKCNDMW8',
  'qRTVg8HFnDA', 'fq8JTLwWvzc', 'XRjhtC9HEZU', 'DGIXT7ce3vQ', 'vPhg6sc1Mk4',
  'slbCv4f0tPo', 'Ftm2uv7-Ybw', 'n9Fyev4qe4E', 'UeFWR6xhfvw', 'Yam5uK6R-bQ',
  'IvjMgVS6kng', 'XcGh1Dex4Yo', 'Qhu2L4MHX0g', 'eZe4Q_58UTU', 'gXXOuQDyZXA',
  'eI9WoDh-2b4', 'HchoJW80jiQ', 'BHACKCNDMW8', 'qRTVg8HFnDA', 'fq8JTLwWvzc',
  'XRjhtC9HEZU', 'DGIXT7ce3vQ', 'vPhg6sc1Mk4', 'slbCv4f0tPo', 'Ftm2uv7-Ybw',
  'n9Fyev4qe4E', 'UeFWR6xhfvw', 'Yam5uK6R-bQ', 'IvjMgVS6kng', 'XcGh1Dex4Yo',
  'Qhu2L4MHX0g', 'eZe4Q_58UTU', 'gXXOuQDyZXA', 'eI9WoDh-2b4', 'HchoJW80jiQ',
  'BHACKCNDMW8', 'qRTVg8HFnDA', 'fq8JTLwWvzc', 'XRjhtC9HEZU', 'DGIXT7ce3vQ',
  'vPhg6sc1Mk4', 'slbCv4f0tPo', 'Ftm2uv7-Ybw', 'n9Fyev4qe4E', 'UeFWR6xhfvw',
  'Yam5uK6R-bQ', 'IvjMgVS6kng', 'XcGh1Dex4Yo', 'Qhu2L4MHX0g', 'eZe4Q_58UTU',
  'gXXOuQDyZXA', 'eI9WoDh-2b4', 'HchoJW80jiQ', 'BHACKCNDMW8', 'qRTVg8HFnDA',
  'fq8JTLwWvzc', 'XRjhtC9HEZU', 'DGIXT7ce3vQ', 'vPhg6sc1Mk4', 'slbCv4f0tPo',
  'Ftm2uv7-Ybw', 'n9Fyev4qe4E', 'UeFWR6xhfvw', 'Yam5uK6R-bQ', 'IvjMgVS6kng',
  'XcGh1Dex4Yo', 'Qhu2L4MHX0g', 'eZe4Q_58UTU', 'gXXOuQDyZXA', 'eI9WoDh-2b4',
  'HchoJW80jiQ', 'BHACKCNDMW8', 'qRTVg8HFnDA', 'fq8JTLwWvzc', 'XRjhtC9HEZU',
  'DGIXT7ce3vQ', 'vPhg6sc1Mk4', 'slbCv4f0tPo', 'Ftm2uv7-Ybw', 'n9Fyev4qe4E',
  'UeFWR6xhfvw', 'Yam5uK6R-bQ', 'IvjMgVS6kng', 'XcGh1Dex4Yo', 'Qhu2L4MHX0g',
  'eZe4Q_58UTU', 'gXXOuQDyZXA', 'eI9WoDh-2b4', 'HchoJW80jiQ', 'BHACKCNDMW8'
];

let videoSelectionCount = 0;
const PRE_SELECTED_LIMIT = 3;
let currentPlayer;
let nextPlayer;
let cachedVideos = [];
const MAX_CACHED_VIDEOS = 5;

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

async function preScreenVideo(videoId) {
  const tempContainerId = 'temp-video-container';
  const tempContainer = document.createElement('div');
  tempContainer.id = tempContainerId;
  tempContainer.style.display = 'none';
  document.body.appendChild(tempContainer);

  const player = await createPlayer(videoId, tempContainerId);
  player.playVideo();

  return new Promise((resolve) => {
    const checkInterval = setInterval(() => {
      if (player.getPlayerState() === 1) { // Video is playing
        clearInterval(checkInterval);
        player.stopVideo();
        document.body.removeChild(tempContainer);
        resolve(true);
      } else if (player.getPlayerState() === 5) { // Video is cued
        clearInterval(checkInterval);
        document.body.removeChild(tempContainer);
        resolve(false);
      }
    }, 100);

    // Timeout after 5 seconds
    setTimeout(() => {
      clearInterval(checkInterval);
      document.body.removeChild(tempContainer);
      resolve(false);
    }, 5000);
  });
}

async function getCachedOrNewVideo(withMusic) {
  while (cachedVideos.length < MAX_CACHED_VIDEOS) {
    const videoId = getRandomPreSelectedVideo(withMusic);
    const isAdFree = await preScreenVideo(videoId);
    if (isAdFree) {
      cachedVideos.push(videoId);
      if (cachedVideos.length === 1) {
        return videoId;
      }
    }
  }
  return cachedVideos.shift();
}

async function playVideo(withMusic = true) {
  videoSelectionCount++;

  if (videoSelectionCount <= PRE_SELECTED_LIMIT) {
    const videoId = await getCachedOrNewVideo(withMusic);

    if (!currentPlayer) {
      currentPlayer = await createPlayer(videoId, 'video-container');
    } else {
      currentPlayer.loadVideoById(videoId);
    }

    currentPlayer.unMute();
    currentPlayer.playVideo();

    // Aggressively check for ads and switch if necessary
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
  let adCheckCount = 0;
  const maxAdChecks = 20; // Check for 2 seconds (20 * 100ms)

  const adCheckInterval = setInterval(() => {
    adCheckCount++;
    if (player.getAdState() === 1 || player.getAdState() === 3) { // Ad is playing or queued
      console.log("Ad detected, switching to next video");
      clearInterval(adCheckInterval);
      switchToNextVideo(withMusic);
    } else if (player.getPlayerState() === 1) { // Video is playing
      console.log("No ad detected, playing video");
      clearInterval(adCheckInterval);
    } else if (adCheckCount >= maxAdChecks) {
      console.log("Ad check timeout, assuming no ad");
      clearInterval(adCheckInterval);
    }
  }, 100); // Check every 100ms for faster response
}

async function switchToNextVideo(withMusic) {
  const nextVideoId = await getCachedOrNewVideo(withMusic);
  currentPlayer.loadVideoById(nextVideoId);
  currentPlayer.unMute();
  currentPlayer.playVideo();
  checkForAdsAndSwitch(currentPlayer, withMusic);
}

async function preloadNextVideo(withMusic) {
  const nextVideoId = await getCachedOrNewVideo(withMusic);
  if (!nextPlayer) {
    const nextContainerId = 'next-video-container';
    if (!document.getElementById(nextContainerId)) {
      const container = document.createElement('div');
      container.id = nextContainerId;
      container.style.display = 'none';
      document.body.appendChild(container);
    }
    nextPlayer = await createPlayer(nextVideoId, nextContainerId);
  } else {
    nextPlayer.loadVideoById(nextVideoId);
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
  cachedVideos = []; // Clear cached videos when switching music preference
  // Other logic for handling music toggle...
});

// Initialize by pre-caching some videos
(async function initializeCachedVideos() {
  const withMusic = document.getElementById('musicToggle').checked;
  for (let i = 0; i < MAX_CACHED_VIDEOS; i++) {
    await getCachedOrNewVideo(withMusic);
  }
})();
