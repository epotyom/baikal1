'use strict';

angular.module('baikalApp.services', ['ngResource'])

.factory('Photos', ['$resource',
  function($resource){
    return $resource('photo/:season.json', {}, {});
  }])

.factory('Music', ['$resource',
  function($resource){
    var Music = {state: 'pause', current: 0};
    Music.list = $resource('music/list.json', {}, {}).query(function() {
      for (var i = Music.list.length - 1; i >= 0; i--) {
        Music.list[i].id = i;
      };
      document.getElementById('audio_mp3').src = Music.list[0].mp3;
      document.getElementById('audio_ogg').src = Music.list[0].ogg;
      jQuery('#audio_audio').load().bind('ended', function(){
          Music.playNext();
      })
      .bind('playing', function(){
          console.log(Music.state+' -> play');
          Music.state = 'play';
      })      
      .bind('pause', function(){
        console.log(Music.state+' -> pause');
          Music.state = 'pause';
      })
      .bind('waiting', function(){
        console.log(Music.state+' -> loading');
          Music.state = 'loading';
      });
    });

    Music.playPause = function(id) {
      if (typeof id == 'undefined' || id == Music.current) {
        if (Music.state == 'play') {
          document.getElementById('audio_audio').pause();
        } else {
          document.getElementById('audio_audio').play();
        }
      } else {
        Music.play(id);
      }
    }

    Music.play = function(id) {
      Music.current = id;
      document.getElementById('audio_mp3').src = Music.list[Music.current].mp3;
      document.getElementById('audio_ogg').src = Music.list[Music.current].ogg;
      jQuery('#audio_audio').load();
      document.getElementById('audio_audio').play();
    }

    Music.playNext = function() {
      Music.play((Music.current + 1) % Music.list.length);    
    }

    Music.get

    return Music;
  }])

.factory('Post', ['$resource',
  function($resource){
    return $resource('post/:cid/:pid.json', {}, {});
  }])

.factory('Category', ['$resource',
  function($resource){
    return $resource('post/categories.json', {}, {});
  }])

.factory('Media', ['$resource',
  function($resource){
    return $resource('media/:pid.json', {}, {});
  }]);