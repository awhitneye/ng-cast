

angular.module('video-player')
  .component('search', {

    bindings: {
      updateData: '<'
    },
    
    controller: function(youTube) {
      this.search = function() {
        youTube.search(this.query, this.updateData);
        this.query = '';
      };
      
      this.handleKeyup = function(event) {
        if (event.key === 'Enter') {
          this.search();
        } else {
          this.debouncedSearch(this.query, this.updateData);
        }
      };
      
      this.debouncedSearch = _.debounce(youTube.search, 500, false);        
      
    },
    
    templateUrl: 'src/templates/search.html'

  });
