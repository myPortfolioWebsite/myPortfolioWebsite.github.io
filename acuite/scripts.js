var jq = jQuery.noConflict();

jq(function() {
    jq("#btn").on('click', function() {
        jq(".wrapper").slideToggle(500, function() {
            if (jq(this).css('display') === 'none') {
                jq(this).removeAttr('style');
            }
        });
    });
});