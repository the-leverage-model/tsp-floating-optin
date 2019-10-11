jQuery( function($) {
    
    var optin = $('#optinbox');
    
    var top = optin.offset().top;  //Optin position from top of document
    var offset = Math.floor( top + (optin.outerHeight()/2) + 100); // The Offset
    var height = window.innerHeight;
    var width = window.innerWidth;
    
    $(window).on('resize', function() { 
        width = window.innerWidth;
        height = window.innerHeight;
    });
    var botPos = -210;
    $(window).scroll(function() {
        var $height = $(window).scrollTop();
        var $calc = ($height - offset);
       
        
        if($height > offset) {
            optin.css({
                bottom: botPos,
                right: 0,
                padding: 20, 
                backgroundColor: '#000', 
                position:'fixed',
            }, 'slow');
            
        } else {
            optin.css({padding: 0, backgroundColor: '', position:'relative'});          
        }
        buildHeight($calc);
    });
    
    
    function buildHeight(calc, daHeight) {
        
        if (calc > 0 && botPos < 0) {
            botPos= botPos + 10;
            //Enabled
        } 
        
        return botPos;
    }
});
