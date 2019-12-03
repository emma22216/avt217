$(document).ready(function(){
  console.log('Ready!');
  var tileClicked = false;
	var firstTileClicked;
	var secondTileClicked;
	var topPosFir = 0;
	var leftPosFir = 0;
	var topPosSec = 0;
	var leftPosSec = 0;
	var shuffle = Math.floor((Math.random() * 4) + 1);
	var moves = 0;
	var secs = 0;


	//  shuffle the tiles
  function shuffleTiles(){
		if(shuffle == 1){
			var input = $('#pic').css({top: 0, left: 340});
		} else if(shuffle == 2){
			var input = $('#pic').css({top: 340, left: 0});
		} else if(shuffle == 3){
			var input = $('#pic').css({top: 0, left: 680});
		} else if(shuffle == 4){
			var input = $('#pic').css({top: 340, left: 340});
    } else if(shuffle == 5){
      var input = $('#pic').css({top: 680, left: 0});
  }
  }
  function start(){
   setInterval(function(){
  			shuffleTiles();
  			setInterval(function(){
  				secs++
  			}, 1000);
  		}, 1000);
  	}
    //  play the game
    start();
  	$('.pieces').click(function(){

  		if(tileClicked == false){  //  if no tile is clicked

  			//  set variables
  			firstTileClicked = $(this).attr('id');
  			topPosFir = parseInt($(this).css('top'));
  			leftPosFir = parseInt($(this).css('left'));

  			//  highlight tile
  			$(this).addClass('glow');
  			tileClicked = true;

  		} else {  //  if you've clicked a tile

  			//  set variables
  			secondTileClicked = $(this).attr('id');
  			topPosSec = parseInt($(this).css('top'));
  			leftPosSec = parseInt($(this).css('left'));

  			//  animations
  			$('#' + firstTileClicked).css({'top' : topPosSec , 'left' : leftPosSec});
  			$('#' + secondTileClicked).css({'top' : topPosFir , 'left' : leftPosFir});

  			//  remove the glow and reset the first tile
  			$('.pieces').removeClass('glow');
  			tileClicked = false;

  			//  test for the win
        var pT = parseInt($('#pic').css('top'));
        var pL = parseInt($('#pic').css('left'));
  			setTimeout(function(){
  				if(
            $('#piece-6').css('left') == pL + 'px' && $('#piece-6').css('top') == pT + 'px'
  				){
            $('h1').text('You Found the Potato!')
  					$('p').text('You have solved the puzzle in ' + secs + ' seconds using ' + moves + ' moves!!');
  					$('article').addClass('glow-2');
  					moves = 0;
  				}
  			}, 1000);

  			//  increment the move counter
  			moves++

  		}

  	});  //  end the click function

  });
