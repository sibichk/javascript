$(document).ready(function(){
	if( /Android|iPhone/i.test(navigator.userAgent) ) {
		$('form').append('<button>Submit</button>');
 	}


 	$('#generate').click(function(){
 		$('form').first().clone().appendTo('body').find("input").val("");
 	})
 	$('body').keydown(function (e){
    if(e.keyCode == 13){
    	console.log('enter outer');
        if( /Android|iPhone/i.test(navigator.userAgent)){
        	return null;
		}
        else{
    		alert('you pressed enter ^_^');
    	}
    }
    
})
});