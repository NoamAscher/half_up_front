 // sample Vue component
  var milestones = new Vue({
    el: '#milestones',
    data: {
      milestones: []
    },
    ready: function() {
      var that;
      that = this;
      $.ajax({
        url: '/milestones.json',
        success: function(res) {
          that.milestones = res;
        }
      });
    }
  });
  // end of Vue addition

