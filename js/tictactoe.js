
var turn = 0;

$('.square').click(function() {    	
    if (turn === 0 && $(this).text() == "") {
        $(this).text("x");
        turn = 1;
    } else if(turn === 1 && $(this).text() == "") {
        $(this).text("o");
        turn = 0; 
    }

	$('.playerTurn').toggleClass('hidePlayer');

    rules();
});

var rules = function() {
    var result = false;
    var $a1Text = $('.a1').text();
    var $a2Text = $('.a2').text();
    var $a3Text = $('.a3').text();
    var $b1Text = $('.b1').text();
    var $b2Text = $('.b2').text();
    var $b3Text = $('.b3').text();
    var $c1Text = $('.c1').text();
    var $c2Text = $('.c2').text();
    var $c3Text = $('.c3').text();

    if 	($a1Text === $a2Text && $a1Text === $a3Text && $a1Text !== "" ) { 
        result = true;
    } else if ($b1Text === $b2Text && $b1Text === $b3Text && $b1Text !== "" ) { 
        result = true;
    } else if ($c1Text === $c2Text && $c1Text === $c3Text && $c1Text !== "") { 
        result = true;
    } else if ($a1Text === $b1Text && $a1Text === $c1Text && $a1Text !== "") { 
        result = true;
    } else if ($a2Text === $b2Text && $a2Text === $c2Text && $a2Text !== "") { 
        result = true;
    } else if ($a3Text === $b3Text && $a3Text === $c3Text && $a3Text !== "") { 
        result = true;
    } else if ($a1Text === $b2Text && $a1Text === $c3Text && $a1Text !== "") { 
        result = true;
    } else if ($a3Text === $b2Text && $a3Text === $c1Text && $a3Text !== "") { 
        result = true; 
    };

    if ( result ) {
        winner();
        gameOver();

    };
};

var winner = function() {
	var currentPlayer;
if (turn = 1) {
	currentPlayer = "x"
	// $(".winnerOne").css("visibility", "visible");
} else (turn = 0) {
	currentPlayer = "o"
}
};	

// }

// var compMove = function () {
//     if (a1 == "" && ((a3 == "x" && a2 == "x") || (c3 == "x" && b2 == "x") || (c1 == "x" && b1 == "x"))) {
//         $('#a1').text("o");
//         turn = 0;


 var clearInputs = $("#newgame").click( function() {
 	$('.square').text("");
 })

 
var gameOver = function() {
	if (result = true) {
	$('.playerTurn').text("Game Over");
	}
}








