angular.module('spotyFynder')

.factory('spotifyService', function ($http) {
  function findArtist (query) {
    var urlArtists = 'https://api.spotify.com/v1/search?type=artist&query=' + artistName
    return $http.get(urlArtists)
  }

  function findAlbum (artistId) {
    var urlAlbum = 'https://api.spotify.com/v1/artists/' + artistId + '/albums'
    return $http.get(urlAlbum)
  }

  function findSong (idAlbum) {
    var urlSongs = 'https://api.spotify.com/v1/albums/' + idAlbum + '/tracks'
    return $http.get(urlSongs)
  }

  return {
    findArtist: artistName,
    findAlbum: artistSelected,
    findSong: albumSelected
  }
})
