$(document).ready(function (){

$("button.add-item").on("click",(function(){
	var grocery = $("#addto").val(); 
	$("list-items").append( "<li>+grocery+</li>");
	})
});

// $(".addButton").on("click", function(){ var grocery = $("input").val(); $("ul").append("<li>" + grocery + "</li>"); });