jQuery(document).ready(function($) {
	if($('.thanhvienpage').hasClass('thanhvienpage')){
		if( $.trim($('.errorclass .error.message').text()) != '' ){
			alert($('.errorclass .error.message').text());
		}
	}
	// magic zoom
	$('.main-image').mouseover(function(){
		$('.main-image').mousemove(function(e){
		  $(this).find('img').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
		});
	});
	//scroll sp
	var tid_sp = setTimeout(mycode, 300);
	var diemdung_sp = $('#Mod354 .workshome-content .browse-view').height() - 300;
	function mycode(){
		if( $('#Mod354 .workshome-content .browse-view').position().top == -diemdung_sp ){
			$('#Mod354 .workshome-content .browse-view').css('top','0px');
		}
		else{
			$('#Mod354 .workshome-content .browse-view').css('top',$('#Mod354 .workshome-content .browse-view').position().top - 1);
		}
		tid_sp = setTimeout(mycode, 30); // repeat myself
	}
	$('#Mod354 .workshome-content .browse-view').mouseenter(function(){
		clearTimeout(tid_sp);
	})
	.mouseleave(function() {
		tid_sp = setTimeout(mycode, 30);
	});
});

