$(document).ready(function (){

    $('.tabs a').on('click', function(){
        $('.tabs .tab-item').removeClass('active');
        $('.tab-contents .tab-content').removeClass('active');
        $(this).closest('.tab-item').addClass('active');

        var rel = $(this).attr('rel');
        $('#'+rel+'-content').addClass('active');

        $('.signpost-slider').slick('setPosition');
    });

    $('.signpost-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows: false,

              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
              }
            }
          ]
    });
});