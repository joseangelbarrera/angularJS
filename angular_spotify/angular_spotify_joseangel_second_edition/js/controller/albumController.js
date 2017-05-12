angular.module('spotyFynder')

.controller('songsController', function ($scope, $rootScope, spotifyService) {
  $scope.findSong = function () {
    var idAlbum = $scope.albumSelected
    spotifyService.findSong(albumSelected)
            .then(function (response) {
              $rootScope.songs = response.data.items
            })
  }
})
