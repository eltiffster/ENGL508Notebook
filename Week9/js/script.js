jQuery(function($) {

$('#IAm').keydown(function() {
    $('#IAm-response').css("display", "block");
    $('#IAm-group').addClass('has-error');
    $(this).focus();
});

$('#IDesire').keydown(function() {
    $('#IDesire-response').css("display", "block");
    $('#IDesire-group').addClass('has-error');
    $(this).focus();
});

$('#APrompt').keydown(function() {
    $('#APrompt-response').css("display", "block");
    $('#APrompt-group').addClass('has-error');
    $(this).focus();
});

});