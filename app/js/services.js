'use strict';

angular.module('baikalApp.services', ['ngResource'])

.factory('Photos', ['$resource',
  function($resource){
    return $resource('photo/:season.json', {}, {});
  }])

.factory('Music', ['$resource',
  function($resource){
    var Music = {state: 0 /* 0 - pause, 1 - play, 2 - loading */, current: 0};
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
          console.log(Music.state+' -> 1');
          Music.updateState(1);
          console.log(Music.state+' new value');
      })      
      .bind('pause', function(){
        console.log(Music.state+' -> 0');
          Music.updateState(0);
          console.log(Music.state+' new value');
      })
      .bind('waiting', function(){
        console.log(Music.state+' -> 2');
          Music.updateState(2);
          console.log(Music.state+' new value');
      });
    });

    Music.updateState = function(state) {
      Music.state = state;
    }

    Music.playPause = function(id) {
      if (typeof id == 'undefined' || id == Music.current) {
        if (Music.state == 1) {
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