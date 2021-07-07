"use strict";

(function(){
    $(function() {
        let started = false;
        $('#start').on('mouseenter', function () {
            started = true;
        })

        $('.boundary').on('mouseenter', function () {
            if (started) {
                $('.boundary').toggleClass('youlose');
                started = false;
                setTimeout(function() {
                    alert("Sorry, you lose :(");
                    $('.boundary').toggleClass('youlose');
                }, 1);
            }
        }).on('mouseleave', function () {
            console.log("leave");
        })

        $('#end').on('mouseenter', function () {
            if (started) {
                alert("You win! :)")
                started = false;
            }
        })
    });
})();