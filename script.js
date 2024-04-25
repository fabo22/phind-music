document.addEventListener('DOMContentLoaded', function() {
    const songsContainer = document.getElementById('songs-container');

    const songs = [
        { title: 'Song 1', image: 'path/to/image1.jpg', alt: 'Description of Song 1' },
        { title: 'Song 2', image: 'path/to/image2.jpg', alt: 'Description of Song 2' },
        // Add more songs as needed
    ];

    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('song');

        const img = document.createElement('img');
        img.src = song.image;
        img.alt = song.alt; // Add alt text
        songDiv.appendChild(img);

        const title = document.createElement('h3');
        title.textContent = song.title;
        songDiv.appendChild(title);

        songsContainer.appendChild(songDiv);
    });
});
