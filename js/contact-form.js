
jQuery(document).ready(function () {
    // Validate Contact Form
    jQuery("#contact_form").validate({
        rules: {
            verify: {
                equalTo: "#math"
            }
        },
        showErrors: function (map, list) {
            this.currentElements.removeClass("error_warning");
            jQuery.each(list, function (index, error) {
                jQuery(error.element).addClass("error_warning");
                jQuery("#contact_form div.error_message").fadeIn(300);
            });
        },
        submitHandler: function (form) {
            jQuery.ajax({
                url: form.action,
                type: form.method,
                data: jQuery(form).serialize(),
                success: function () {
                    jQuery("#contact_form div.error_message").fadeOut(300);
                    setTimeout(function () {
                        jQuery("#contact_form div.submit_message").fadeIn(300).delay(3000).fadeOut(300);
                        jQuery("#verify").val("");
                    }, 1000);
                    yaCounter43747399.reachGoal('target_wantbuy');
                }
            });
        }
    });
});











