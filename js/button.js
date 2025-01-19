document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-btn');
    const audioPlayers = document.querySelectorAll('.audio-player');
    const cdImages = document.querySelectorAll('.cdImage');

    playButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const audioPlayer = audioPlayers[index];
            const cdImage = cdImages[index];

            if (audioPlayer.paused || audioPlayer.ended) {
                audioPlayer.play();
                cdImage.classList.add('is-playing');
            } else {
                audioPlayer.pause();
                cdImage.classList.remove('is-playing');
            }
        });
    });

    audioPlayers.forEach((audioPlayer, index) => {
        audioPlayer.addEventListener('ended', function() {
            cdImages[index].classList.remove('is-playing');
        });
    });
})