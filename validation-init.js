    var Script = function () {
        $.validator.setDefaults({
            submitHandler: function () {
                this.submit();
            }
        });

        $().ready(function () {
            // validate the comment form when it is submitted
            $("#commentForm").validate();

            // validate signup form on keyup and submit
            $("#myinfo").validate({
                rules: {
                    first_name: "required",
                    last_name: "required",
                    email_addres: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    first_name: "Please enter your firstname",
                    last_name: "Please enter your lastname",
                    email_addres: "Please enter a valid email address",
                    agree: "Please accept our policy"
                },
                submitHandler: function (form) {
                    if (document.getElementById('image_size').value !== 'no') {
                        form.submit();
                    } else {
                        $("#image").show();
                    }
                }
            });

            //valid function of read more data



            $(document).ready(function () {
                $("#gradeA").click(function () {
                    $("p").toggle();
                });
            });

            $("#addsubscription").validate({
                rules: {
                    subscription_type: "required",
                    length: {
                        required: true,
                        digits: true
                    },
                    cost: {
                        required: true,
                        number: true,
                        min: 0
                    },
                    description: "required",
                    status: "required"
                },
                messages: {
                    subscription_type: "Please Enter Subscription Type",
                    length: {
                        required: "Please Enter Length",
                        digits: "Please Enter Proper Number"
                    },
                    cost: {
                        required: "Please Enter Cost ",
                        number: "Please Enter Proper Value",
                        min: "Please Enter Positive Number"
                    },
                    description: "Please Enter Description",
                    status: "Please Enter Status"
                }
            });

            $("#editsubscription").validate({
                rules: {
                    subscription_type: "required",
                    length: {
                        required: true,
                        digits: true
                    },
                    cost: {
                        required: true,
                        number: true,
                        min: 0
                    },
                    description: "required",
                    status: "required"
                },
                messages: {
                    subscription_type: "Please Enter Subscription Type",
                    length: {
                        required: "Please Enter Length",
                        digits: "Please Enter Proper Number"
                    },
                    cost: {
                        required: "Please Enter Cost ",
                        number: "Please Enter Proper Value",
                        min: "Please Enter Positive Number"
                    },
                    description: "Please Enter Description",
                    status: "Please Enter Status"
                }
            });

            $("#chngPass").validate({
                rules: {
                    npass: {
                        required: true,
                        minlength: 5
                    },
                    cpass: {
                        required: true,
                        minlength: 5,
                        equalTo: "#npass"
                    }
                },
                messages: {
                    npass: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 5 characters long"
                    },
                    cpass: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 5 characters long",
                        equalTo: "Please enter the same password as above"
                    }
                }
            });

            $("#siteSettings").validate({
                rules: {
                    site_name: "required",
                    system_email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    site_name: "Please enter your Site Name",
                    system_email: "Please enter a valid System Email"
                }
            });

            $("#contactinfo").validate({
                rules: {
                    contact_email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    contact_email: "Please enter a valid Contact Email"
                }
            });

            $("#editPage").validate({
                rules: {
                    page_title: "required",
                    page_tag: "required",
                    page_key: "required",
                    page_alias: "required"
                },
                messages: {
                    page_title: "Please Enter Page Title",
                    page_tag: "Please Enter Meta Tag",
                    page_key: "Please Enter Meta Keywords",
                    page_alias: "Please Enter Alias"
                }
            });

            $("#editPageSP").validate({
                rules: {
                    page_title_sp: "required"
                },
                messages: {
                    page_title_sp: "Please Enter Page Title",
                }
            });

            $("#editPageFR").validate({
                rules: {
                    page_title_fr: "required"
                },
                messages: {
                    page_title_fr: "Please Enter Page Title",
                }
            });

            //for artical management

            $("#addartical").validate({
                rules: {
                    art_title1: "required",
                    img: "required"

                },
                messages: {
                    art_title1: "Please Enter Artical Title",
                    img: "Please select Artical Image"
                }
                /*,
                 submitHandler: function(form) {
                 var title=document.getElementById('art_title1').value;
                 var url=document.getElementById('url').value;
                 alert(title);alert(url);
                 if(title!=''){
                 
                 var dataString = "title=" + title;
                 $.ajax({
                 type: "POST",
                 url: url,
                 data: dataString,
                 cache: false,
                 success: function(data){
                 if (data=='yes'){
                 document.getElementById("atitle").innerHTML="Artical title already exist!";
                 }
                 else{
                 form.submit();
                 }
                 }
                 });
                 }
                 }*/
            });

            $("#addsubadmin").validate({
                rules: {
                    firstname: "required",
                    lastname: "required",
                    a_email: "required",
                    user_name: "required",
                    password: {
                        required: true,
                        minlength: 6,
                    },
                    cpassword: {
                        required: true,
                        equalTo: "#pwd"
                    },
                },
                messages: {
                    firstname: "Please enter firstname",
                    lastname: "Please enter Lastname",
                    a_email: "Please enter email address",
                    user_name: "Please enter unique username",
                    password: "Please Enter Artical Title",
                    cpassword: "Please select Artical Image"
                }
            });


            $("#editArtical").validate({
                rules: {
                    art_title: "required"
                },
                messages: {
                    art_title: "Please Enter Artical Title",
                }
            });

            $("#editArticalFR").validate({
                rules: {
                    art_title_fr: "required"
                },
                messages: {
                    art_title_fr: "Please Enter Artical Title in French",
                }
            });

            $("#editArticalSP").validate({
                rules: {
                    art_title_sp: "required"
                },
                messages: {
                    art_title_sp: "Please Enter Artical Title in French",
                }
            });

            $("#editEmailTemp").validate({
                rules: {
                    mail_title: "required"
                },
                messages: {
                    mail_title: "Please Enter Email Subject",
                }
            });



            //For slider management
            $("#addslider").validate({
                rules: {
                    slider_name: "required",
                    img: "required"

                },
                messages: {
                    slider_name: "Please Enter Slider Title",
                    img: "Please select Slider Image",
                }
            });

            $("#editslider").validate({
                rules: {
                    slider_name: "required"
                },
                messages: {
                    slider_name: "Please Enter Slider Title",
                }
            });



            //For testimonials Management
            $("#addtestimonials").validate({
                rules: {
                    testimonials_name1: "required",
                    testimonials_name2: "required",
                    img: "required"

                },
                messages: {
                    testimonials_name1: "Please Enter Testimonials Title(First)",
                    testimonials_name2: "Please Enter Testimonials Title(Second)",
                    img: "Please select Testimonials Image",
                }
            });

            $("#edittestimonials").validate({
                rules: {
                    testimonials_name1: "required",
                    testimonials_name2: "required"
                },
                messages: {
                    testimonials_name1: "Please Enter Testimonials Title(First)",
                    testimonials_name2: "Please Enter Testimonials Title(Second)",
                }
            });

            $("#edittestimonialsfr").validate({
                rules: {
                    testimonials_name1_fr: "required",
                    testimonials_name2_fr: "required"

                },
                messages: {
                    testimonials_name1_fr: "Please Enter Testimonials Title French(First)",
                    testimonials_name2_fr: "Please Enter Testimonials Title French(Second)",
                }
            });

            $("#edittestimonialssp").validate({
                rules: {
                    testimonials_name1_sp: "required",
                    testimonials_name2_sp: "required"
                },
                messages: {
                    testimonials_name1_sp: "Please Enter Testimonials Title Spanish(First)",
                    testimonials_name2_sp: "Please Enter Testimonials Title Spanish(Second)",
                }
            });



            //for country management

            $("#addcoun").validate({
                rules: {
                    country_name: "required",
                    country_code: "required",
                    iso_code_3: "required",
                    postcode_required: "required"
                },
                messages: {
                    country_name: "Please Enter Country name",
                    country_code: "Please Enter Country code",
                    iso_code_3: "Please Enter Iso Code 3",
                    postcode_required: "Please Enter Post Code"

                }
            });

            $("#editcoun").validate({
                rules: {
                    country_name: "required",
                    country_code: "required",
                    iso_code_3: "required",
                    postcode_required: "required"
                },
                messages: {
                    country_name: "Please Enter Country name",
                    country_code: "Please Enter Country code",
                    iso_code_3: "Please Enter Iso Code 3",
                    postcode_required: "Please Enter Post Code"

                }
            });


            $("#editcounFR").validate({
                rules: {
                    country_name_fr: "required"
                },
                messages: {
                    country_name_fr: "Please Enter Country name"
                }
            });

            $("#editcounSP").validate({
                rules: {
                    country_name_sp: "required"
                },
                messages: {
                    country_name_sp: "Please Enter Country name"
                }
            });

            //for category management

            $("#addcat").validate({
                rules: {
                    category_name: "required",
                    //description: "Please Give Meta Description",
                    meta_key: "required",
                    //meta_description: "required",
                    //img1: "required"
                },
                messages: {
                    category_name: "Please Enter Category name",
                    //description: "required",
                    meta_key: "Please Enter Meta Key",
                    //meta_description: "Please Give Meta Description",
                    //img1: "Please Insert an Image"

                }
            });

            $("#editcat").validate({
                rules: {
                    category_name: "required",
                    //description: "Please Give Meta Description",
                    meta_key: "required",
                    //meta_description: "required",
                    //img1: "required"
                },
                messages: {
                    category_name: "Please Enter Category name",
                    //description: "required",
                    meta_key: "Please Enter Meta Key",
                    //meta_description: "Please Give Meta Description",
                    //img1: "Please Insert an Image"

                }
            });

            //state validation

            $("#addstate").validate({
                rules: {
                    country_id: "required",
                    state_name: "required",
                    state_name_fr: "required",
                    state_name_sp: "required",
                    state_code: "required",
                    status: "required",
                },
                messages: {
                    country_name: "Please Enter Country Name",
                    state_name: "Please Enter State Name",
                    state_name_fr: "Please Enter State Name(French)",
                    state_name_sp: "Please Enter State Name(Spanish)",
                    state_code: "Please Enter State Code",
                    status: "Please Enter Status"

                }
            });

            $("#editstate").validate({
                rules: {
                    country_id: "required",
                    state_name: "required",
                    state_name_fr: "required",
                    state_name_sp: "required",
                    state_code: "required",
                    status: "required",
                },
                messages: {
                    country_id: "Please Enter Country Name",
                    state_name: "Please Enter State Name",
                    state_name_fr: "Please Enter State Name(French)",
                    state_name_sp: "Please Enter State Name(Spanish)",
                    state_code: "Please Enter State Code",
                    status: "Please Enter Status"

                }
            });

            //News Letter Subscriber Validation

            $("#editnewsletter").validate({
                rules: {
                    email_id: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    email_id: "Please enter valid email id"
                }


            });




            //subscription validation

            //$("#addsubscription").validate({
            //	    rules: {
            //		subscription_type: "required",
            //		length: "required",
            //	       cost: "required",
            //		description: "required",
            //		status: "required",
            //		
            //	    },
            //	    messages: {
            //		subscription_type: "Please Enter Subscription Type",
            //	       length: "Please Enter Length",
            //	       cost: "Please Enter Cost",
            //	       description: "Please Enter Description",
            //	       
            //	       status: "Please Enter Status"
            //
            //	    }
            //	});
            //
            //$("#editsubscription").validate({
            //	    rules: {
            //		subscription_type: "required",
            //		length: "required",
            //		cost: "required",
            //		description: "required",
            //		status: "required",
            //		
            //	    },
            //	    messages: {
            //		subscription_type: "Please Enter Subscription Type",
            //	       length: "Please Enter Length",
            //	       cost: "Please Enter Cost",
            //	       description: "Please Enter Description",
            //	       
            //	       status: "Please Enter Status"
            //
            //	    }
            //	});


            $("#editticker").validate({
                rules: {
                    text_one: "required",
                    text_two: "required",
                    link: {
                        url: true
                    }
                },
                messages: {
                    text_one: "Please Enter Text One",
                    text_two: "Please Enter Text Two",
                    link: {
                        url: "Please Enter Valid Url"
                    }
                },
                submitHandler: function (form) {
                    if (document.getElementById('image_size').value != 'no') {
                        form.submit();
                    } else {
                        $("#image").show();
                    }
                }
            });




            $("#editsubscriptionfr").validate({
                rules: {
                    subscription_type_fr: "required",
                    description_fr: "required"

                },
                messages: {
                    subscription_type_fr: "Please Enter Subscription Type",
                    description_fr: "Please Enter Category Description"


                }
            });
            $("#editsubscriptionsp").validate({
                rules: {
                    subscription_type_sp: "required",
                    description_sp: "required"

                },
                messages: {
                    subscription_type_sp: "Please Enter Subscription Type",
                    description_sp: "Please Enter Category Description"


                }
            });

            //Business validation

            $("#addbusiness").validate({
                rules: {
                    business_type: "required",
                    business_type_fr: "required",
                    business_type_sp: "required",
                    status: "required",
                },
                messages: {
                    business_type: "Please Enter Business Type",
                    business_type_fr: "Please Enter Business Type (French)",
                    business_type_sp: "Please Enter Business Type (Spanish)",
                    status: "Please Enter Status"

                }
            });

            $("#editbusiness").validate({
                rules: {
                    business_type: "required",
                    business_type_fr: "required",
                    business_type_sp: "required",
                    status: "required",
                },
                messages: {
                    business_type: "Please Enter Business Type",
                    business_type_fr: "Please Enter Business Type (French)",
                    business_type_sp: "Please Enter Business Type (Spanish)",
                    status: "Please Enter Status"


                }
            });


            //Property Type validation

            $("#addproperty").validate({
                rules: {
                    prop_type: "required",
                    prop_type_fr: "required",
                    prop_type_sp: "required",
                    status: "required",
                },
                messages: {
                    prop_type: "Please Enter Property Type",
                    prop_type_fr: "Please Enter Property Type (French)",
                    prop_type_sp: "Please Enter Property Type (Spanish)",
                    status: "Please Enter Status"

                }
            });

            $("#editprop").validate({
                rules: {
                    prop_type: "required",
                    prop_type_fr: "required",
                    prop_type_sp: "required",
                    status: "required",
                },
                messages: {
                    prop_type: "Please Enter Property Type",
                    prop_type_fr: "Please Enter Property Type (French)",
                    prop_type_sp: "Please Enter Property Type (Spanish)",
                    status: "Please Enter Status"


                }
            });


            //validation of social links
            $("#social-link").validate();

            //     //validation of user management
            //        $("#edituser").validate({
            //		    rules: {
            //		          password: "required",
            //			
            //		    },
            //		    messages: {
            //		       password: "Please Enter Password",
            //		      
            //	
            //		    }
            //		});

            //validation of Home Owner management


            $("#edituser").validate({
                rules: {
                    f_name: "required",
                    l_name: "required",
                    strt_address: "required",
                    city: "required",
                    country: "required",
                    state: "required",
                    phone: "required",
                    zipcode: "required",
                    c_password: {
                        equalTo: "#password"
                    }
                },
                messages: {
                    f_name: "Please Enter First Name",
                    l_name: "Please Enter Last Name",
                    strt_address: "Please Enter Street Address",
                    city: "Please Enter City",
                    country: "Please select Country",
                    state: "Please select state",
                    phone: "Please Enter Phone Number",
                    zipcode: "Please Enter Zipcode"

                }

            });





            //	 validation of contractor management

            $("#editcontract").validate({
                rules: {
                    contact_f_name: "required",
                    contact_l_name: "required",
                    b_name: "required",
                    strt_add: "required",
                    city: "required",
                    coun: "required",
                    state: "required",
                    zip: "required",
                    phone: "required",
                    bus_mail: "required",
                    website: "required",
                    fax: "required",
                    bus_since: "required",
                    no_emp: "required",
                    serv_dis: "required",
                    spnsr: "required",
                    btyp: "required",
                    fb_link: {
                        url: true
                    },
                    twit_link: {
                        url: true
                    },
                    google_link: {
                        url: true
                    },
                    linkedin_link: {
                        url: true
                    },
                    c_password: {
                        equalTo: "#password"

                    }

                },
                messages: {
                    contact_f_name: "Please Enter First Name",
                    contact_l_name: "Please Enter Last Name",
                    b_name: "Please Enter Business Name",
                    strt_add: "Please Enter Address",
                    city: "Please Enter City",
                    coun: "Please Select Country",
                    state: "Please Select State",
                    zip: "Please Enter Zip",
                    phone: "Please Enter Phone",
                    bus_mail: "Please Enter Business Mail",
                    website: "Please Enter Website",
                    fax: "Please Enter Fax",
                    bus_since: "Please Enter Business Since",
                    no_emp: "Please Enter Number of Employee",
                    serv_dis: "Please Enter Service Distance",
                    spnsr: "Please Select Sponsor",
                    btyp: "Please Select Business Type",
                    fb_link: {
                        url: "Please Enter Valid Facebook Url"
                    },
                    twit_link: {
                        url: "Please Enter Valid Twitter Url"
                    },
                    google_link: {
                        url: "Please Enter Valid Google Plus Url"
                    },
                    linkedin_link: {
                        url: "Please Enter Valid Linkedin Url"
                    }

                },
                submitHandler: function (form) {
                    if (document.getElementById('spnsr').value == 'S' && document.getElementById('status').value != 'A') {
                        var str = "You can not sponsor a user who is not active !";
                        var msg = str.fontcolor("red");
                        document.getElementById('error_message').style.display = 'block';
                        document.getElementById('error_message').innerHTML = msg;
                    } else {
                        form.submit();
                    }
                }
            });


            //Validation for News letter
            $("#mailsend").validate({
                rules: {
                    sub: "required",
                    msg: "required"
                },
                messages: {
                    sub: "Please Enter Subject",
                    msg: "Please Give Message"
                }
            });

            $("#mailsendall").validate({
                rules: {
                    sub1: "required",
                    msg1: {
                        required: true
                    }

                },
                messages: {
                    sub1: "Please Enter Subject",
                    msg1: "Please Give Message"
                }
            });

            /////validation for admin award
            $("#edit_award").validate({
                rules: {
                    award_title: "required",
                },
                messages: {
                    award_title: "Please Enter Award Title",
                }
            });

            // propose username by combining first- and lastname
            $("#username").focus(function () {
                var firstname = $("#firstname").val();
                var lastname = $("#lastname").val();
                if (firstname && lastname && !this.value) {
                    this.value = firstname + "." + lastname;
                }
            });

            //code to hide topic selection, disable for demo
            var newsletter = $("#newsletter");
            // newsletter topics are optional, hide at first
            var inital = newsletter.is(":checked");
            var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
            var topicInputs = topics.find("input").attr("disabled", !inital);
            // show when newsletter is checked
            newsletter.click(function () {
                topics[this.checked ? "removeClass" : "addClass"]("gray");
                topicInputs.attr("disabled", !this.checked);
            });
        });


        /* Slide div for reply message in ticket management  */
        $(document).ready(function () {

            $(".slidingDiv").hide();
            $(".show_hide").show();

            $('.show_hide').click(function () {
                $(".slidingDiv").slideToggle();
            });

        });



        /*  end */

    }();

    /*
     For state dropdown in
     contractor management
     */
    function state_change (country_id, url) {

        if (country_id != "") {
            var dataString = "country_id=" + country_id;
            $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                cache: false,
                success: function (data) {

                    document.getElementById("loading").innerHTML = data;
                }
            });
        } else {

            document.getElementById("loading").innerHTML = '<select  class="form-control valid" style="width: 300px" name="state" id="state"><option value="">Please Select</option></select>';
        }
    }