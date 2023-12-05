export async function load({ params, fetch }) {
	const songID = params.songID;
	const songResponse = await fetch(`https://taylor-swift-api.sarbo.workers.dev/songs/${songID}`);
	const song = await songResponse.json();
	const lyricresponse = await fetch(`https://taylor-swift-api.sarbo.workers.dev/lyrics/${songID}
`);
	const lyric = await lyricresponse.json();

	let albumCoverSrc = '';
	let albumName = '';

	if (song.album_id === 1) {
		albumName = '1989';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png';
	}
	if (song.album_id === 2) {
		albumName = 'Taylor Swift';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/1/1f/Taylor_Swift_-_Taylor_Swift.png';
	}
	if (song.album_id === 3) {
		albumName = 'Fearless';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%282021_album_cover%29_by_Taylor_Swift.png';
	}
	if (song.album_id === 4) {
		albumName = 'Speak Now';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/5/5b/Taylor_Swift_-_Speak_Now_%28Taylor%27s_Version%29.png';
	}
	if (song.album_id === 5) {
		albumName = 'Red';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/4/47/Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png';
	}
	if (song.album_id === 6) {
		albumName = 'Reputation';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/f/f2/Taylor_Swift_-_Reputation.png';
	}
	if (song.album_id === 7) {
		albumName = 'Lover';
		albumCoverSrc = 'https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png';
	}
	if (song.album_id === 8) {
		albumName = 'Folklore';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png';
	}
	if (song.album_id === 9) {
		albumName = 'Evermore';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/0/0a/Taylor_Swift_-_Evermore.png';
	}
	if (song.album_id === 10) {
		albumName = 'Midnights';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png';
	}

	console.log(song);
	console.log(lyric);

	return {
		song: {
			name: song.song_title,
			album: albumName,
			lyrics: lyric.lyrics,
			img: albumCoverSrc,
		}
	};
}
