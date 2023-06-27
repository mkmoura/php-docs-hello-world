$(document).ready(function() {

    $('.item-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false,
        dots: true
    });

    $('.lideranca-slider').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        fade: true,
        dots: true
    });

    new Rellax('.rellax', {
        speed: 4,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });

    jQuery('.fadeInUpWindow').viewportChecker({   
        classToRemove: 'invisible',
        classToAdd: 'animate__animated animate__fadeInUp',
        
    });

    jQuery('.zoomIn').viewportChecker({   
        classToRemove: 'invisible',
        classToAdd: 'animate__animated animate__zoomIn',
        
    });
    
    $('.circle-bottom').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#historia").offset().top
        }, 200);
    });

    /*
    / mapa
    */

    var sociais_sa = 'https://redemarista.org.br/';
    var marista =    'https://colegiosmaristas.com.br/';
    var champagnat = 'https://escolachampagnat.com.br/';
    var sociais=     'https://maristaescolassociais.org.br/';
    var sociais_cn = 'https://marista.edu.br/';

    $('#state-ba, #state-pa, #state-ap, #state-ma, #state-to, #state-go, #state-mg, #state-rj, #state-es, #state-ce, #state-rn, #state-pb, #state-pe, #state-al, #state-se').on('click',function() {

        $(".origens").find( ".mapa-svg-estados-active" ).removeClass('mapa-svg-estados-active');
        $(this).addClass('mapa-svg-estados-active');

        var prov = 'Centro-Norte';


        $('.dados-mapa').addClass('d-flex')
        $('.dados-mapa').html('<a href="'+sociais_cn+'" target="_blank"><img src="./assets/images/link.svg" width="15" class="me-1"> Colégios Maristas e Escolas Sociais</a>');

    });

    $('#state-pr, #state-sc, #state-ms, #state-sp').on('click',function() {

        $(".origens").find( ".mapa-svg-estados-active" ).removeClass('mapa-svg-estados-active');
        $(this).addClass('mapa-svg-estados-active');
        
        var prov = 'Centro-Sul';

        $('.dados-mapa').addClass('d-flex flex-column animate__animated')
        $('.dados-mapa').html('<a href="'+marista+'" target="_blank"><img src="./assets/images/link.svg" width="15" class="me-1"> Colégios Maristas</a> <a href="'+champagnat+'" target="_blank"><img src="./assets/images/link.svg" width="15" class="me-1"> Escolas Champagnat</a> <a href="'+sociais+'" target="_blank"><img src="./assets/images/link.svg" width="15" class="me-1"> Escolas Sociais</a>');

    });

    $('#state-am, #state-ac, #state-rr, #state-ro, #state-mt, #state-rs, #state-df').on('click',function() {

        $(".origens").find( ".mapa-svg-estados-active" ).removeClass('mapa-svg-estados-active');
        $(this).addClass('mapa-svg-estados-active');

        var prov = 'Sul-Amazônia';

        $('.dados-mapa').addClass('d-flex flex-column animate__animated')
        $('.dados-mapa').html('<a href="'+sociais_sa+'" target="_blank"><img src="./assets/images/link.svg" width="15" class="me-1"> Colégios Maristas e Escolas Sociais</a>');

    });

})
