// valid.js
// v 1.0
// we are trying to detect all the object within parent element

    (function($){
        'use strict';

        /*
         $.fn.validate = function(){
         var curr_selector = $(this).selector;
         $(curr_selector + " .valid").each(function(key, item){
         console.log($(this).attr('type'));
         });
         //            $(this).children().each(function(key, item){
         //                //$(this).context.localName for detect the html element e.g. : <input / <label / <button / <textarea
         //                var element = item.localName;
         //                if(element !== 'label' && element !== "button"){
         //                    var error_div = item.attr('error_div');
         //                    if(element === 'select'){
         //                        //                    console.log(element);
         //                    } else if(element === "textarea"){
         //                        //                    console.log(element);
         //                    } else{
         //                        var input_type = $(this).attr('type');
         //                        console.log(input_type);
         //                    }
         //                }
         //            });
         };
         */

        $.fn.validateBlank = function(){
            var is_error = 0;
            $($(this).selector + " .valid").each(function(key, item){
                //item.localName for detect the html element e.g. : <input / <label / <button / <textarea
                var element = item.localName;
                // DETECTING ERROR DIV IS ID OR CLASS
                var error_div = "";
                if($("#" + $(item).attr('error_div')).length != 0){
                    error_div = "#" + $(item).attr('error_div');
                }
                else if($("." + $(item).attr('error_div')).length != 0){
                    error_div = "." + $(item).attr('error_div');
                }
                var error_msg = $(item).attr('error_msg');

                if(error_msg == "" || error_msg == undefined){
//                    error_msg = element + " Error.";
                    error_msg = "Required.";
                }
                if(element !== 'label' && element != 'button'){
                    if(element === 'select' || element === "textarea"){
                        if($(item).val() == ""){
                            // opiton is required
                            is_error++;
                            $(error_div).html(error_msg);
                        }
                        else{
                            $(error_div).html('');
                        }
                    }
                    /*
                     //                    if(element === "textarea"){
                     //                        if(is_valid){
                     //                            if($(item).val() == ""){
                     //                                // textarea is required
                     //                                $(error_div).html(error_msg);
                     //                            }
                     //                            else{
                     //                                $(error_div).html('');
                     //                            }
                     //                        }
                     //                    }
                     */
                    if(element !== "select" && element !== "button" && element !== "textarea"){
                        var input_type = $(item).attr('type');
                        if(input_type == 'text'){
                            if($(item).val() == ""){
                                // opiton is required
                                is_error++;
                                $(error_div).html(error_msg);
                            }
                            else{
                                $(error_div).html('');
                            }
                        }
                        if(input_type == 'checkbox' || input_type == 'radio'){
                            var chk_name = $(item).attr('name');
                            var check_length = $("[name='" + chk_name + "']:checked").length;
                            if(check_length === 0){
                                is_error++;
                                $(error_div).html(error_msg);
                            }
                            else{
                                $(error_div).html('');
                            }
                        }
                        /*if(input_type == 'radio'){
                         var chk_name = $(item).attr('name');
                         var check_length = $("[name='" + chk_name + "']:checked").length;
                         if(check_length === 0){
                         is_error++;
                         $(error_div).html(error_msg);
                         }
                         else{
                         $(error_div).html('');
                         }
                         }*/
                        if(input_type == 'file'){
                            $("[name='" + $(item).attr('name') + "']").each(function(img_key, img){
                                var image_name = $(img).val();
                                if(image_name == ""){
                                    is_error++;
                                    $(error_div).html(error_msg);
                                }
                                else{
                                    $(error_div).html('');
                                }
                            });
                        }
                    }
                }
            });
            if(is_error > 0){
                return false;
            }
            else if(is_error == 0){
                return true;
            }
        };
    }(jQuery));
