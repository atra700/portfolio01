
$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });


});

$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },
    })
  });
  
  $(function () {
    const MIS = new Swiper('.main_oversea_slide', {
        loop: true,

        navigation: {
            nextEl: '.main_oversea .inner .itm_area .arrows .next',
            prevEl: '.main_oversea .inner .itm_area .arrows .prev',
        },
        pagination: {
            clickable: true,
            el: '.main_oversea .inner .itm_area .page',
        },

        on: {
            slideChangeTransitionStart: function () {
                console.log(this.realIndex);
                $('.main_oversea .inner .desc_area .itm').removeClass('on');
                $('.main_oversea .inner .desc_area .itm').eq(this.realIndex).addClass('on');
            }
        }
    })
});

$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $('#flk').on('change', function () {
        let lnk = $(this).val();
        if (lnk) window.open(lnk)
    })
});

