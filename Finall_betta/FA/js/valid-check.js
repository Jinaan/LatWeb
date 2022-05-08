
(function ($) {
    "use strict";
    var input = $('.validate-input .input-input');

     /*==================================================================
    [ Focus input ]*/
    $('.input-input').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
                
                
                showValidate(input);
            }
        })    
    })
  
    $('.validate-form .input-input').each(function(){
        $(this).focus(function(){   //menghilangkan class belum-terisi ketika mendapat fokus
           hideValidate(this);
        });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);