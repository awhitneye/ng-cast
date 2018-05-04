angular.module('video-player')
  .component('videoListEntry', {

    bindings: {
      video: '<',
      index: '<',
      onClick: '<'
    },
    
    templateUrl: 'src/templates/videoListEntry.html'

  });
