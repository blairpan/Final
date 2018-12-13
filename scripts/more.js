$(document).ready(function(){
	
	$("#search").click(function(event){
		var getRecipe = $("#input").val();
	 		$("h3").remove();
	 		$("a").remove();
	
	
	$.ajax({
		'url': "https://www.food2fork.com/api/search?",
		'type': "GET",
		'dataType': "JSON",
		'data':{
			'key':"c92cb274ff8b368bbbbb7fcb8d13ad06",
			'q': getRecipe ,
			},
			success: function(data){
				console.log(data.recipes);
				$('#container').append("<h3>" + data.recipes[0].title + "</h3>")
				$('#container').append( "<a target='_blank' href=" + data.recipes[0].source_url + ">" + data.recipes[0].source_url + "</a>" )
				$('#container').append("<h3>" + data.recipes[1].title + "</h3>")
				$('#container').append( "<a target='_blank' href=" + data.recipes[1].source_url+ ">" + data.recipes[1].source_url + "</a>" )
			 },

			error: function(data, textStatus, errorThrown){
				console.log("error:(")
				console.log(errorThrown);
			},
		});
		});
	});

