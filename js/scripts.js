$(document).ready(function () {
    $('.mobile-menu').on('click', function () {
        $('.menu').slideToggle().css('right', '0px !important').css('left', 'auto');
    })

    // Tabs script
    $(function() {
        var tab = $('#tabs .tabs-items > div');
        tab.hide().filter(':first').show();

        $('#tabs .tabs-nav a').click(function(){
            tab.hide();
            tab.filter(this.hash).show();
            $('#tabs .tabs-nav a').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
    });
    // Anchor links
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
    
})
