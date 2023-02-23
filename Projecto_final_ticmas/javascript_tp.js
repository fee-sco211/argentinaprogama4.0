$(document).ready(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('header').addClass('header_desplazamiento');
		} else {
			$('header').removeClass('header_desplazamiento');
		}
	});
});