$(document).ready(function(){
	var ele= $('#snake').children();
    var key=0;
	$(document).keydown(function(e) {
        
    switch(e.which) {
        case 37: // left
        if(key==39){
        	
        }
        else{
	        ele.stop().animate({
	        	marginLeft:"0px"
	        });
	        key = (event.which);
    	}	
        break;

        case 38: // up
        if(key==40){

        }
        else{
            ele.stop().animate({
            	marginTop:"0px"
            });
            key = (event.which);
        }
        
        break;

        case 39: // right
        if(key==37){

        }
        else if(key==40 || key==38 || key==0){
            ele.stop().animate({
            	marginLeft:"895px"
            })
            key = (event.which);
        }
        break;

        case 40: // down
        if(key==38){

        }
        else if(key==37 || key==39 || key==0){
            var a = $('.head').offset();
            var left_val = a.left;
            $('.part').each(function(){
                $(this).animate({left:left_val});
            });
            ele.stop().animate({
            	marginTop:"760px"
            });
            key = (event.which);
        }
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
	})