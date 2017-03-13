$(document).ready(function(){

var $carrousel = $('#carrousel'),
    $img = $('#carrousel img'),
    indexImg = $img.length - 1,
    i = 0,
    $currentImg = $img.eq(i);

$img.css('display', 'none');
$currentImg.css('display', 'block');

$('.next').click(function(){

    i++;
    if( i <= indexImg ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = 0;
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }

});

$('.prev').click(function(){

    i--;

    if( i >= 0 ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = indexImg;
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }

});

function slideImg(){
    setTimeout(function(){

        if(i < indexImg){
	    i++;
	}
	else{ 
	    i = 0;
	}

	$img.css('display', 'none');

	$currentImg = $img.eq(i);
	$currentImg.css('display', 'block');

	slideImg(); // on oublie pas de relancer la fonction à la fin

}, 3000); // on définit l'intervalle à 7000 millisecondes (7s)
}

slideImg(); // enfin, on lance la fonction une première fois

});
