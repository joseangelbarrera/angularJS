angular.module('spotifyApp')

  .factory('spotifyService', function ($http) {
    function _getArtist (artistname) {
      var url = 'https://api.spotify.com/v1/search?type=artist&query=' + artistname
      return $http.get(url)
    }

    function _getInfoProfile (artistname) {
      var url = 'https://api.github.com/users/' + artistname
      return $http.get(url)
    }

    return {
      getRepos: _getRepos,
      getInfoProfile: _getInfoProfile
    }
  })



    https://api.spotify.com/v1/search?type=artist&query=<ARTIST-NAME>
    https://api.spotify.com/v1/artists/<ID-ARTIST>/albums
    https://api.spotify.com/v1/albums/<ID-ALBUM>/tracks