$(document).ready(function() {

	$('a.panel').click(function () {

		$('a.panel').removeClass('selected');
		$(this).addClass('selected');
		
		current = $(this);
		
		$('#wrapper').scrollTo($(this).attr('href'), 800);		
		
		return false;
	});

	$(window).resize(function () {
		resizePanel();
	});
	
});

function resizePanel() {

	width = $(window).width();
	height = $(window).height();

	mask_width = width * $('.item').length;
		
	$('#debug').html(width  + ' ' + height + ' ' + mask_width);
		
	$('#wrapper, .item').css({width: width, height: height});
	$('#mask').css({width: mask_width, height: height});
	$('#wrapper').scrollTo($('a.selected').attr('href'), 0);
		
}


function toggle_visibility(id) {
                    var e = document.getElementById(id);
                    if (e.style.display == 'block')
                        e.style.display = 'none';
                    else
                        e.style.display = 'block';
}
$(document).ready(function(){
    // show popup when you click on the link
    $('.show-popup').click(function(event){
        event.preventDefault(); // disable normal link function so that it doesn't refresh the page
        var docHeight = $(document).height(); //grab the height of the page
        var scrollTop = $(window).scrollTop(); //grab the px value from the top of the page to where you're scrolling
        var selectedPopup = $(this).data('showpopup'); //get the corresponding popup to show
         
        $('.overlay-bg').show().css({'height' : docHeight}); //display your popup background and set height to the page height
        $('.popup'+selectedPopup).show().css({'top': scrollTop+20+'px'}); //show the appropriate popup and set the content 20px from the window top
    });
   
    // hide popup when user clicks on close button or if user clicks anywhere outside the container
    $('.close-btn, .overlay-bg').click(function(){
        $('.overlay-bg, .overlay-content').hide(); // hide the overlay
    });
 
    // hide the popup when user presses the esc key
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // if user presses esc key
            $('.overlay-bg, .overlay-content').hide(); //hide the overlay
        }
    });
   
});
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        // fix and dirty ;)
        $('.listening').remove();
        $('h1').remove();
        $('.app').css('background', 'none');
        $('.app').css('padding', '0');
        $('.app').css('margin', '0');
        $('.app').css('top', '0');
        $('.app').css('left', '0');
        $('.app').css('width', '100%');
        
        
        /**
         * pagingSlider binding
         */
        
        $$('#wrapper').swipeLeft(function(){
            pagingSlider.slidePageFrom(".myPageContainerClass", 'right');
        });
        
        $$('#wrapper').swipeRight(function(){
            pagingSlider.slidePageFrom(".myPageContainerClass", 'left');
        });
        
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
//        var parentElement = document.getElementById(id);
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');

//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');

//        console.log('Received Event: ' + id);
    }
};