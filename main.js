
var turn=0;
var squareA
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

wins: [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ], [ 0, 4, 8 ], [ 2, 4, 6 ] ]
