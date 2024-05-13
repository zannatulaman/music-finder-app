const inputSong = document.getElementById("inputSong");
const searchButton = document.getElementById("button-search");
const lyrics = document.getElementById("listLyrics");

searchButton.addEventListener("click", () => {
    const query = inputSong.value;
    //console.log(songFinder);

    function getLyrics(trackName, artistName) {
        fetch(`https://api.lyrics.ovh/v1/${artistName}/${trackName}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const songlyrics = data.lyrics
                //console.log(songlyrics);

            lyrics.innerHTML = `<li class="card"><strong>${songlyrics}</strong></li>`
            

            
            })
            .catch((error) => {
                console.error('Error fetching lyrics:', error);
    });
    }

    //Example usage
    let trackName = "Billie Jean";
    let artistName = "Michael Jackson";
    getLyrics(trackName, artistName);

    //lyrics.innerHTML = `${query}`

    

});
