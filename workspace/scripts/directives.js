"use strict";

myapp.directive('playsong', function() {
  return function(scope, element, attrs) {
    var Callback = function() {
        var elementid = $(element).attr('id');
        var elementsrc = $(element).attr('src');
        var audioElement = document.getElementById('video-player');

        audioElement.src = elementsrc;
        audioElement.play();
        
        $('.song .song-title').removeClass('active');
        $('span.btn-play').removeClass('active');
       
        $("#"+elementid).parent().parent().addClass('active');
        $(".aside #"+elementid).addClass('active');
        $("#band-photo").css('opacity','0');
        
        console.log('now playing...');
    };
    element.bind('click', Callback);
  }
});


myapp.directive('pausesong', function() {
  return function(scope, element, attrs) {
    var Callback = function() {
        var elementid = $(element).attr('id');
        var elementsrc = $(element).attr('src');
        var audioElement = document.getElementById('video-player');
        $('.song-title').removeClass('active');
        $('.btn-play').removeClass('active');
        audioElement.src = elementsrc;
        audioElement.pause();
        console.log('pause play...');
    };
    element.bind('click', Callback);
  }
});



myapp.directive('lyrics', function() {
  return function(scope, element, attrs) {
    var Callback = function() {
    var elementid = $(element).attr('id');

    $("#band-photo-container").html(' ').jScrollPane();

    $("#band-photo-container").load("./data/lyrics.html #"+elementid, function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "success")
        $( ".lineitem p:hidden:first" ).fadeIn( "slow" );
        $('.lineitem p ').html(' ').css('height','0');
           //console.log(elementid+responseTxt);
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
        }).fadeIn( "slow", function() {
          // Animation complete
        });
        
        console.log('show lyrics');
    };
    element.bind('click', Callback);
  }
})



