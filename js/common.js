$(document).ready(function(event){
    $('.russia-block img').click(function(event){
        $('.dropdown-country').toggleClass('dropdown-country-active');
        $('.russia-block').toggleClass('russia-block-active');
    });
    $('.one').hover(function(event){
		$('.img-one').toggleClass('img-pass');
		$('.img-first').toggleClass('img-active');
	});
	$('.two').hover(function(event){
		$('.img-two').toggleClass('img-pass');
		$('.img-second').toggleClass('img-active');
	});
	$('.three').hover(function(event){
		$('.img-three').toggleClass('img-pass');
		$('.img-third').toggleClass('img-active');
	});
});

document.body.onload = function() {

    setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done') ) {
    preloader.classList.add('done');
    }
    }, 1500);
 }

