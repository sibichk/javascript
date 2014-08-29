$(document).ready(function(){
	if( /Android|iPhone/i.test(navigator.userAgent) ) {
		$('form').append('<button class="submit">Submit</button>');
 	}


 	$('#generate').click(function(){
 		$('form').first().clone().appendTo('body').find("input").val("");
 	})

 	$('body').keydown(function (e){
    if(e.keyCode == 13){
        if( /Android|iPhone/i.test(navigator.userAgent)){
        	return null;
		  }
        else{
    		submit();
    	   }  
        }
    })

    $('.submit').click(function(){
        submit();
    })
    

    function submit(){
        var data = $('form input').serializeArray();
        $.post($('form').attr('action'), data, function(info){alert(info)});
    }
});