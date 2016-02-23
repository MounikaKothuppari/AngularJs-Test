  'use strict';
  angular.module('angularJsTestApp')

  .service('LoginService', function($q) {
      var uname = '';
      var upwd = '';

     

      return {
          loginUser: function(name, pw) {

              var deferred = $q.defer();
              var promise = deferred.promise;

              if (name == 'user' && pw == 'user1') {
                  deferred.resolve('Welcome ' + name + '!');
              } else {
                  deferred.reject('Wrong credentials.');
              }
              promise.success = function(fn) {
                  promise.then(fn);
                  return promise;
              }
              promise.error = function(fn) {
                  promise.then(null, fn);
                  return promise;
              }
              return promise;
          },
          getData: function() {
              return {
                  "uname": uname,
                  "upwd": upwd
              }
          },
          removeInfo:function(){
           uname="";
           upwd="";
         },
          setData:  function (name, pw) {
          uname = name;
          upwd = pw;
      }

      }
  });
