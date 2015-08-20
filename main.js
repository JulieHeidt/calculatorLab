var turn=0;


$(".square").on("click", function(){
	console.log(this);
	if (turn===1) {
		$(this).html("X");
	}else{
		$(this).html("O");
	}
	turn=turn===0?1:0;
	
});
$("#reset").on("click", function(){
	console.log(this);
	$(".square").empty();
});

