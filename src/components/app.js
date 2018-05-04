angular.module('video-player')
  .component('app', {

    controller: function($window, youTube) {
      this.videos = [];
      this.currentlyPlaying = 0;
      this.selectVideo = (index) => {
        this.currentlyPlaying = index;
      };
      
      this.updateData = (result) => {
        this.videos = result;
        this.currentlyPlaying = 0;
      };
      
      this.searchResults = () => {};
      
      this.$onInit = () => {
        youTube.search('hello', this.updateData);
      };
    },
    
    templateUrl: 'src/templates/app.html'
  });
