angular.module('spotyFynder')

.controller('searchController', function ($scope, $rootScope, spotifyService) {
	 $scope.artistQuery = ''
  var artistName = $scope.artistName
  $scope.findArtist = function () {
    spotifyService.findSong(albumSelected)
            .then(function (response) {
              $scope.artists = response.data.artists.items
            })
  }
})
