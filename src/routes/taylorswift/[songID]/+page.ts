export async function load({ params, fetch }) {
	const songID = params.songID;
	const songResponse = await fetch(`https://taylor-swift-api.sarbo.workers.dev/songs/${songID}`);
	const song = await songResponse.json();
	const lyricresponse = await fetch(`https://taylor-swift-api.sarbo.workers.dev/lyrics/${songID}
`);
	const lyric = await lyricresponse.json();

	let albumCoverSrc = '';
	let albumName = '';
	let releaseDate = '';

	if (song.album_id === 1) {
		albumName = '1989';
		releaseDate = '10-27-2023';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png';
	}
	if (song.album_id === 2) {
		albumName = 'Taylor Swift';
		releaseDate = '10-24-2006';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/1/1f/Taylor_Swift_-_Taylor_Swift.png';
	}
	if (song.album_id === 3) {
		albumName = 'Fearless';
		releaseDate = '04-09-2021';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%282021_album_cover%29_by_Taylor_Swift.png';
	}
	if (song.album_id === 4) {
		albumName = 'Speak Now';
		releaseDate = '07-07-2023';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/5/5b/Taylor_Swift_-_Speak_Now_%28Taylor%27s_Version%29.png';
	}
	if (song.album_id === 5) {
		albumName = 'Red';
		releaseDate = '11-12-2021';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/4/47/Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png';
	}
	if (song.album_id === 6) {
		albumName = 'Reputation';
		releaseDate = '11-20-2017';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/f/f2/Taylor_Swift_-_Reputation.png';
	}
	if (song.album_id === 7) {
		albumName = 'Lover';
		releaseDate = '08-23-2019';
		albumCoverSrc = 'https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png';
	}
	if (song.album_id === 8) {
		albumName = 'Folklore';
		releaseDate = '07-24-2020';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png';
	}
	if (song.album_id === 9) {
		albumName = 'Evermore';
		releaseDate = '12-11-2020';
		albumCoverSrc =
			'https://upload.wikimedia.org/wikipedia/en/0/0a/Taylor_Swift_-_Evermore.png';
	}
	if (song.album_id === 10) {
		albumName = 'Midnights';
		releaseDate = '10-21-2022';
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
			release: releaseDate,
		}
	};
}
