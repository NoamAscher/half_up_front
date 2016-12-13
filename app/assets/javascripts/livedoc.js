 // sample Vue component
  var users = new Vue({
    el: '#users',
    data: {
      users: []
    },
    ready: function() {
      var that;
      that = this;
      $.ajax({
        url: '/users.json',
        success: function(res) {
          that.users = res;
        }
      });
    }
  });
  // end of Vue addition

