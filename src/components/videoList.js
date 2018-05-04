angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<'
    }, 
    
    controller: function() {
      
    },
    
    templateUrl: 'src/templates/videoList.html'

  });
