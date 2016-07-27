(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    // DONE: refactor this request into an $.ajax call
    $.get('/github/users/codefellows-seattle-301d9/repos' +
          '?per_page=10&sort=updated')
          .done(function(data) {
            reposObj.allRepos = data;
          }).done(callback);
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
