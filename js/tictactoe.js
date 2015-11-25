var turn = 0;

$('.square').click(function() {    	
    if (turn === 0 && $(this).text() == "") {
        $(this).text("x");
        turn = 1;
        rules();
        compMove();
    } else if(turn === 1 && $(this).text() == "") {
        //$(this).text("o");
        //turn = 0; 
    }

	$('.playerTurn').toggleClass('hidePlayer');

    rules();
});


    var $a1Text = $('.a1').text();
    var $a2Text = $('.a2').text();
    var $a3Text = $('.a3').text();
    var $b1Text = $('.b1').text();
    var $b2Text = $('.b2').text();
    var $b3Text = $('.b3').text();
    var $c1Text = $('.c1').text();
    var $c2Text = $('.c2').text();
    var $c3Text = $('.c3').text();

 var rules = function() {
    var result = false; 

    $a1Text = $('.a1').text();
    $a2Text = $('.a2').text();
    $a3Text = $('.a3').text();
    $b1Text = $('.b1').text();
    $b2Text = $('.b2').text();
    $b3Text = $('.b3').text();
    $c1Text = $('.c1').text();
    $c2Text = $('.c2').text();
    $c3Text = $('.c3').text();  

    if 	($a1Text === $a2Text && $a1Text === $a3Text && $a1Text !== "" ) { 
        result = true;
        changeWinColor([$('.a1'), $('.a2'), $('.a3')]);
    } else if ($b1Text === $b2Text && $b1Text === $b3Text && $b1Text !== "" ) { 
        result = true;
        changeWinColor([$('.b1'), $('.b2'), $('.b3')]);
    } else if ($c1Text === $c2Text && $c1Text === $c3Text && $c1Text !== "") { 
        result = true;
        changeWinColor([$('.c1'), $('.c2'), $('.c3')]);
    } else if ($a1Text === $b1Text && $a1Text === $c1Text && $a1Text !== "") { 
        result = true;
        changeWinColor([$('.a1'), $('.b1'), $('.c1')]);
    } else if ($a2Text === $b2Text && $a2Text === $c2Text && $a2Text !== "") { 
        result = true;
        changeWinColor([$('.a2'), $('.b2'), $('.c2')]);
    } else if ($a3Text === $b3Text && $a3Text === $c3Text && $a3Text !== "") { 
        result = true;
        changeWinColor([$('.a3'), $('.b3'), $('.c3')]);
    } else if ($a1Text === $b2Text && $a1Text === $c3Text && $a1Text !== "") { 
        result = true;
        changeWinColor([$('.a1'), $('.b2'), $('.c3')]);
    } else if ($a3Text === $b2Text && $a3Text === $c1Text && $a3Text !== "") { 
        result = true; 
        changeWinColor([$('.a3'), $('.b2'), $('.c1')]);
    };

    if ( result ) {
        winner();
        gameOver();

    };
};

var compMove = function () {
    debugger;

    if ($a1Text == "" && (($a3Text == "x" && $a2Text == "x") || ($c3Text == "x" && $b2Text == "x") || ($c1Text == "x" && $b1Text == "x"))) {
        $('.a1').text("o");
        turn = 0;
    } else {
      if ($a2Text == "" && (($a1Text == "x" && $a3Text == "x") || ($c2Text == "x" && $b2Text == "x"))) {
        $('.a2').text("o");
        turn = 0;
        }
        else{
        if ($a3Text == "" && (($a1Text == "x" && $a2Text == "x") || ($c1Text == "x" && $b2Text == "x") || ($c3Text == "x" && $b3Text == "x"))) {
            $('.a3').text("o");
            turn = 0;
        }
            else{
            if ($c3Text == "" && (($c1Text == "x" && $c2Text == "x") || ($a1Text == "x" && $b2Text == "x") || ($a3Text == "x" && $b3Text == "x"))) {
                $('.c3').text("o");
                turn = 0;
        }
                else{
                if ($c1Text == "" && (($c3Text == "x" && $c2Text == "x") || ($a3Text == "x" && $b2Text == "x") || ($a1Text == "x" && $b1Text == "x"))) {
                    $('.c1').text("o");
                    turn = 0;
        }
                    else{
                    if ($c2Text == "" && (($c3Text == "x" && $c1Text == "x") || ($a2Text == "x" && $b2Text == "x"))) {
                        $('.c2').text("o");
                        turn = 0;
        }
                        else{
                        if ($b1Text == "" && (($b3Text == "x" && $b2Text == "x") || ($a1Text == "x" && $c1Text == "x"))) {
                            $('.b1').text("o");
                            turn = 0;
        }
                            else{
                            if ($b3Text == "" && (($a3Text == "x" && $c3Text == "x") || ($b2Text == "x" && $b1Text == "x"))) {
                                $('.b3').text("o");
                                turn = 0;
        }
                                else{
                                if ($b2Text == "" && (($a3Text == "x" && $c1Text == "x") || ($c3Text == "x" && a1 == "x") || ($b3Text == "x" && $b1Text == "x") || ($c2Text == "x" && $a2Text == "x"))) {
                                    $('.b2').text("o");
                                    turn = 0;
        }
                                   else{ // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
                                    if ($b2Text == "") {
                                        $('.b2').text("o");
                                        turn = 0;
                                       
                                    }
                                        else{
                                        if ($a1Text == "") {
                                            $('.a1').text("o");
                                            turn = 0;
                                            
                                    }
                                            else{
                                            if ($c3Text == "") {
                                            $('.c3').text("o");
                                            turn = 0;
                                          
                                    } 
                                                else {
                                                if ($c2Text == "") {
                                            $('.c2').text("o");
                                            turn = 0;
                                          
                                    }
                                                    else{
                                                    if ($b1Text == "") {
                                            $('.b1').text("o");
                                            turn = 0;
                                          
                                    }
                                                    }
                                                }
                                            }
                                   
                                    
                                        }
                                   }
                                }
                            }
                        }
                    }
                }
            }
        }
    }   
};



var changeWinColor = function ( array ) {
    for ( var i = 0; i < array.length; i++ ) {
        array[i].css("background-color", "red")
    };
}

var winner = function() {
	var currentPlayer;
    if (turn === 1) {
    	currentPlayer = "x"
        $('.winnerX').css("visibility", "visible");
        scoreX();


    } else if (turn === 0) {
    	currentPlayer = "o"
        $('.winnerO').css("visibility", "visible");
        scoreO();

    }
};

var scoreX = function () {
    $('.scoreX').text( parseInt( $('.scoreX').text() ) + 1 );
}	

var scoreO = function () {
   $('.scoreO').text( parseInt( $('.scoreO').text() ) + 1 );
}


 var clearInputs = $("#newgame").click( function() {
 	$('.square').text("");
    $('.square').css("background-color", "rgba(60, 132, 198, 0.8");
    $(".gameOver").css("visibility", "hidden");
    $('.playerTurn').css("visibility", "visible");
    $('.winnerX').css("visibility", "hidden");
    $('.winnerO').css("visibility", "hidden");
 })

 
var gameOver = function() {
        $('.playerTurn').css("visibility", "hidden");
        $('.gameOver').css("visibility", "visible");
};








