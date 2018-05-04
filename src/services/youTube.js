angular.module('video-player')
  .service('youTube', function($window, $http) {
    this.search = function(query, callback) {
      var url = 'https://www.googleapis.com/youtube/v3/search';
      $http({
        method: 'GET',
        url: url,
        params: {
          key: $window.YOUTUBE_API_KEY,
          q: query,
          part: 'snippet',
          type: 'video',
          videoEmbeddable: true,
          maxResults: 5
        }
      })
        .then((res) => {
          callback(res.data.items);
        }, (err) => {
          console.error(err);
        });
    };
  });
  