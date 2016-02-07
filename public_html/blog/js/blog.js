jQuery(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    jQuery(this).ekkoLightbox();
});
jQuery(function() {
    jQuery('.article .problem').addClass('hide').each(function() {
        var $problem = jQuery(this),
            $show = jQuery('<a class="problem-link-show" href="javascript:;">顯示題目說明</a>'),
            $hideA = jQuery('<a class="problem-link-hide" href="javascript:;">隱藏題目說明</a>'),
            $hideB = jQuery('<a class="problem-link-hide" href="javascript:;">隱藏題目說明</a>');
        $show.click(function() { $problem.removeClass('hide'); $show.addClass('hide'); }).insertBefore($problem);
        $hideA.click(function() { $problem.addClass('hide'); $show.removeClass('hide'); });
        $hideB.click(function() { $problem.addClass('hide'); $show.removeClass('hide'); });
        $problem.prepend($hideB).append($hideA);
    });
});
