(function($){

    $(document).ready(function () {
        $('.fullpage').fullpage({
            fitToSection: true,
            fixedElements: '.footer',
            autoScrolling: true,
            navigation: true,
            navigationPosition: 'left',
            // responsiveWidth: 768
        });

        $('.close-button').click(function(){
            const checkbox = $('#toggle');
            checkbox.prop('checked', !checkbox.prop("checked"));
        })
        $('.link-animate').hover(function () {
            $(this).css("color", "white")
            $('.link-animate:not(:hover)').css('color', 'grey')
        }, function () {
            $(this).css("color", "white");
            $('.link-animate:not(:hover)').css('color', 'white')
        }); 




        // let start = null; //global

        // $(window).on('touchstart', function (e) {
        //     start = e.changedTouches[0];
        // });

        // $(window).on('touchend', function (e) {
        //     let end = e.changedTouches[0];

        //     if (end.screenX - start.screenX > 0) {
        //         console.log("right")
        //         fullpage_api.moveSectionUp();
        //     }

        //     else if (end.screenX - start.screenX < 0) {
        //         fullpage_api.moveSectionDown();
        //         console.log("left")
        //     }
        // });

    });
    $('body').append('<div class="loader-wrapper"><span class="loader"><span class="loader-inner"></span></span></div>');
    $(window).on('load', function () {
        $('.loader-wrapper').show()
        setTimeout(removeLoader, 1000); //wait for page load PLUS two seconds.
    });
    function removeLoader() {
        $(".loader-wrapper").fadeOut(500, function () {
            // fadeOut complete. Remove the loading div
            $(".loader-wrapper").hide(); //makes page more lightweight 
        });
    }

})(jQuery)