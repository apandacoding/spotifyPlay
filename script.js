const app = {};

app.apiUrl = 'https://api.spotify.com/v1/';
// Have the user enter information about the type of music
app.events = function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        let artist = $('input[type=search]').val();
        console.log(artist);
    });
};
// Use Spotify WEB API to grab the artist information, specifically grab the IDs

// With the IDs we want to get the albums

// then from the albums we get specifc tracks to build the playlist

app.init = function() {
    app.events();

};

$(app.init);