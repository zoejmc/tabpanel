$(document).ready(function () {
    // grab all container panel DIVs
    var tabContainers = $('div.tabs > div');
    // hide them all to start and set opacity to 0
    tabContainers.hide().css('opacity', 0);
    // set the first tab to class="selected"
    $('div.tabs ul.tabNavigation a:first').addClass('selected');

    // add hover handlers to all tabs
    $('div.tabs ul.tabNavigation a').hover(function () {
        var targetPanel = $(this.hash);

        // hide all tabContainers first
        tabContainers.not(targetPanel).slideUp(0);

        // slide down the hovered panel slowly and show content gradually
        targetPanel.slideDown({
            duration: 800, // duration of slide 800 miliseconds
            step: function (now) {
                // Adjust the opacity of the content gradually
                $(this).css('opacity', now / targetPanel.outerHeight());
            },
            complete: function () {
                // After animation set opacity to 1 
                $(this).css('opacity', 1);
            }
        });

        // remove class="selected" from all tabs
        $('div.tabs ul.tabNavigation a').removeClass('selected');
        // set class="selected" on the tab that was just hovered
        $(this).addClass('selected');
        
        // Change background color
        var backgroundColor;
        if ($(this).attr('href') === '#first') {
            backgroundColor = 'lightblue'; 
        } else if ($(this).attr('href') === '#second') {
            backgroundColor = 'lightgreen'; 
        } else if ($(this).attr('href') === '#third') {
            backgroundColor = 'orange'; 
        } else if ($(this).attr('href') === '#fourth') {
            backgroundColor = 'lightcoral'; 
        }
        $('body').css('background-color', backgroundColor);
    }, function () {
    });
});
