
var turn=0;
var squares = $(".square"); console.log(squares);
//calling all the values within .square (class)-->console log them
var arr =	[
			[0, 1, 2],
			[3, 4, 5], 
			[6, 7, 8], 
			[0, 3, 6], 
			[1, 4, 7], 
			[2, 5, 8], 
			[0, 4, 8], 
			[2, 4, 6]
			]	

$(".square").on("click", function(){
	if($(this).text() !== ""){
		alert("Choose another box!");
	} else {	
		if (turn===1) {
			$(this).html("X");
		} else {
			$(this).html("O");
		}
		turn=turn===0?1:0;
	}
});
$("#reset").on("click", function(){
	console.log(this);
	$(".square").empty();
});

function checkForWinner(){
 $.each( arr, function(){
 	if(squares[this[0]]===player && squares[this[1]]===player && squares[this[2]]===player);
 	alert("There is a winner!");
});
}

