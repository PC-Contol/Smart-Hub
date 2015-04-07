jQuery(function(){
	$('.btn').click(function(){
		var url = 'http://' + $('#url').val();
		var param = $(this).attr("cmd");
		if(param.indexOf("cmd") > -1){
			url = url + ":9090";
		}else{
			url = url + "/"+param;	
		} 
			alert(url);
		$.ajax({
		    url: url,
		    type: "GET",
		    dataType: "jsonp",
		    jsonp: "callback",
		    data: param,
		    async: false,
		    cache: false,
		    timeout: 30000,
		    success: function(data){		
		    	var ul = $('<ul>').appendTo('body');
				var json = data;
		        ul.append($(document.createElement('li')).text(data.result));
				$(json.result).each(function(index, item) {
				    ul.append(
				        $(document.createElement('li')).text(item)
				    );
				});
		    },
		    error: function(xhr,status,error, data){
		        console.log("readyState: " + xhr.readyState);
			    console.log("responseText: "+ xhr.responseText);
			    console.log("status: " + xhr.status);
			    console.log("text status: " + status);
			    console.log("error: " + error);	
			    console.log("data: " + data);	

		    }
		});
	});
});