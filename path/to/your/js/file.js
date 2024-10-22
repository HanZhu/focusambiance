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

function getRandomPreSelectedVideo(withMusic) {
  const videos = withMusic ? preSelectedMusicVideos : preSelectedNoMusicVideos;
  const randomIndex = Math.floor(Math.random() * videos.length);
  return videos[randomIndex];
}

function createPlayer(videoId, containerId) {
  return new YT.Player(containerId, {
    height: '100%',
    width: '100%',
    videoId: videoId,
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'mute': 0,
      'loop': 1,
      'playlist': videoId
    },
    events: {
      'onReady': onPlayerReady,
      'onError': onPlayerError
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerError(event) {
  console.log("Video failed to load. Error code:", event.data);
  playVideo(currentPlayer.getIframe().getAttribute('data-with-music') === 'true');
}

function playVideo(withMusic = true) {
  videoSelectionCount++;

  if (videoSelectionCount <= PRE_SELECTED_LIMIT) {
    const videoId = getRandomPreSelectedVideo(withMusic);

    if (!currentPlayer) {
      currentPlayer = createPlayer(videoId, 'video-container');
    } else {
      currentPlayer.loadVideoById(videoId);
    }

    currentPlayer.getIframe().setAttribute('data-with-music', withMusic);
  } else {
    // Fallback to API selection if we've exceeded the pre-selected limit
    selectVideoFromAPI(withMusic).then(videoId => {
      if (videoId) {
        currentPlayer.loadVideoById(videoId);
      } else {
        console.error('Failed to select a video');
        // Handle error (maybe try again or show a message to the user)
      }
    });
  }
}

async function selectVideoFromAPI(withMusic) {
  // Your existing API call logic here
  // Make sure to implement proper error handling and retries
  // ...
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

setTimeout(() => {
    document.getElementById('clock-reminder').style.display = 'none';
}, 10000); // Hide after 10 seconds

// Or, hide after user clicks skip ad button
document.getElementById('skipAdButton').addEventListener('click', () => {
    document.getElementById('clock-reminder').style.display = 'none';
});
