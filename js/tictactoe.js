var turn = 0; // X always starts - turn 0 is X

$('.square').click(function() {    	
    if (turn === 0 && $(this).text() == "") {
        $(".playerTurn").addClass("playerOpacity"); //Slightly changes color when it's X turn
        //Part of function to allow X move
        $(this).text("x"); //Passes X in to the board
        if (rules() === false) { // checks to see if there was a win
            turn = 1; 
            compMove(); // runs computer move
            rules(); // checks to see if there was a win
            turn = 0;  // returns to X turn
        }

     }
});


    var $a1Text = $('.a1').text(); // turns the boards squares in to variables, based on their class
    var $a2Text = $('.a2').text();
    var $a3Text = $('.a3').text();
    var $b1Text = $('.b1').text();
    var $b2Text = $('.b2').text();
    var $b3Text = $('.b3').text();
    var $c1Text = $('.c1').text();
    var $c2Text = $('.c2').text();
    var $c3Text = $('.c3').text();

 var rules = function() { // determines if there has been a win for either player, and also runs the change color code
    
    tieGame();

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
        winner(); // if there is a win, determines whether it was X or 0 - displays this on screen
        gameOver(); // runs the Game Over prompt and hides the Player turn 

    };

    return result;


};

var compMove = function () { // this is the computer AI - it basically tells it to put a 0 in place to block a win
    window.setTimeout(function () {
        $('.playerTurn').removeClass("playerOpacity"); // this is a function that slightly changes the opacity of the Player X move prompt, so X is reminded it is their turn
    }, 100);

    if ($a1Text == "" && (($a3Text == "x" && $a2Text == "x") || ($c3Text == "x" && $b2Text == "x") || ($c1Text == "x" && 
        $b1Text == "x"))) {
        $('.a1').text("o");
    } else {
      if ($a2Text == "" && (($a1Text == "x" && $a3Text == "x") || ($c2Text == "x" && $b2Text == "x"))) {
        $('.a2').text("o");
        }
        else{
        if ($a3Text == "" && (($a1Text == "x" && $a2Text == "x") || ($c1Text == "x" && $b2Text == "x") || ($c3Text == "x" && 
            $b3Text == "x"))) {
            $('.a3').text("o");
        }
            else{
            if ($c3Text == "" && (($c1Text == "x" && $c2Text == "x") || ($a1Text == "x" && $b2Text == "x") || ($a3Text == "x" && $b3Text == "x"))) {
                $('.c3').text("o");
        }
                else{
                if ($c1Text == "" && (($c3Text == "x" && $c2Text == "x") || ($a3Text == "x" && $b2Text == "x") || ($a1Text == "x" && $b1Text == "x"))) {
                    $('.c1').text("o");
        }
                    else{
                    if ($c2Text == "" && (($c3Text == "x" && $c1Text == "x") || ($a2Text == "x" && $b2Text == "x"))) {
                        $('.c2').text("o");
        }
                        else{
                        if ($b1Text == "" && (($b3Text == "x" && $b2Text == "x") || ($a1Text == "x" && $c1Text == "x"))) {
                            $('.b1').text("o");
        }
                            else{
                            if ($b3Text == "" && (($a3Text == "x" && $c3Text == "x") || ($b2Text == "x" && $b1Text == "x"))) {
                                $('.b3').text("o");
        }
                                else{
                                if ($b2Text == "" && (($a3Text == "x" && $c1Text == "x") || ($c3Text == "x" && a1 == "x") || ($b3Text == "x" && $b1Text == "x") || ($c2Text == "x" && $a2Text == "x"))) {
                                    $('.b2').text("o");
        }
                                   else{ // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
                                    if ($b2Text == "") {
                                        $('.b2').text("o");
                                       
                                    }
                                        else{
                                        if ($a1Text == "") {
                                            $('.a1').text("o");
                                            
                                    }
                                            else{
                                            if ($c3Text == "") {
                                            $('.c3').text("o");
                                          
                                    } 
                                                else {
                                                if ($c2Text == "") {
                                            $('.c2').text("o");
                                          
                                    }
                                                    else{
                                                    if ($b1Text == "") {
                                            $('.b1').text("o");
                                          
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



var changeWinColor = function ( array ) { // this changes the background color of the squares for the 3 in a row
    for ( var i = 0; i < array.length; i++ ) {
        array[i].css("background-color", "red")
    };
}

var winner = function() { // this determines whether X or ) has won, and is then passed in to the master function
    if (0 === turn) {
        $('.winnerX').css("visibility", "visible");
        $('.winnerO').css("visibility", "hidden");
        scoreX();


    } else if (1 === turn) {
        $('.winnerX').css("visibility", "hidden");
        $('.winnerO').css("visibility", "visible");
        scoreO();

    }
};


var scoreX = function () { // this adds the score of 1 to the board for X if they win
    $('.scoreX').text( parseInt( $('.scoreX').text() ) + 1 );
}	

var scoreO = function () { // this adds the score of 1 to the board for 0 if they win
   $('.scoreO').text( parseInt( $('.scoreO').text() ) + 1 );
}


 var clearInputs = $("#newGame").click( function() { // this is the New Game button and clears the board if pressed
    turn = 0;
 	$('.square').text("");
    $('.square').css("background-color", "rgba(60, 132, 198, 0.8");
    $('.gameOver').css("visibility", "hidden");
    $('.playerTurn').css("visibility", "visible");
    $('.winnerX').css("visibility", "hidden");
    $('.winnerO').css("visibility", "hidden");
    $('.tieGame').css("visibility", "hidden");
 })

 
var gameOver = function() { // this displays the text Game Over if someone wins, and makes the playerTurn hidden
        // $('.playerTurn').css("visibility", "hidden");
        $('.playerTurn').css("visibility", "hidden");
        $('.gameOver').css("visibility", "visible");
};



var clearScore = $("#clearScore").click (function () { // this clears the score board when pressed
        $('.scoreX').text("0");
        $('.scoreO').text("0");     
})


var tieGame = function() { // Checks for tie game
            if ((($a1Text == "x") || ($a1Text == "o")) && (($b1Text == "x") || ($b1Text == "o")) && (($c1Text == "x") || ($c1Text == "o")) && (($a2Text == "x") || ($a2Text == "o")) && (($b2Text == "x") || ($b2Text == "o")) && (($c2Text == "x") || ($c2Text == "o")) && (($a3Text == "x") || ($a3Text == "o")) && (($b3Text == "x") || ($b3Text == "o")) && (($c3Text == "x") || ($c3Text == "o"))) 
            {
                
        $('.playerTurn').css("visibility", "hidden");
        $('.tieGame').css("visibility", "visible");
           
            }
};




