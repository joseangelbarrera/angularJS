angular.module('spotyFynder')

.controller('albumController', function ($scope, $rootScope, spotifyService) {
  $scope.findAlbum = function () {
    var artistId = $scope.artistSelected
    spotifyService.findAlbum(artistSelected)
            .then(function (response) {
              $rootScope.albums = response.data.items
            })
  }
})
