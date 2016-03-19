var Admin_ID='admin';
$(document).ready(function(e) {
	  
  	//LOGIN VALIDATION
	
	// BUTTON LOGIN CLICK CHECKING
	$("#home_btn_login").click(function(){
		if($("#txt_uid").val()!=="" && $("#txt_pwd").val()!==""){
			var uid=$("#txt_uid").val();
			var pwd=$("#txt_pwd").val();
			var remember=$("#chk_remember:checkbox:checked").length > 0;
			//alert(remember);
			$.ajax({url:"login_action.php",data:{'id':uid,'pwd':pwd,'rmb':remember},success: function(reply){
				if(reply==="success"){
					window.location.href='profile.php';	
				}
				else{
					alert(reply);
				}
			}});	
		}
		else{
			if($("#txt_uid").val()=="")
			{
				alert("Please enter User name!");
				$("#txt_uid").focus();
				//return false;
			}
			else if($("#txt_pwd").val()=="")
			{
				alert("Please enter Password!");
				$("#txt_pwd").focus();
				//return false;
			}
		}
	});
	
	// ON BLUR CHECKING
	$("#txt_uid").blur(function(){
		//alert("blur");
		var loginEmailVal=$(this).val();
		if(loginEmailVal!==""){
			//alert("not null");
			if(loginEmailVal!==Admin_ID){
				//alert("not admin");
				if(emailValid(loginEmailVal)===false)
				{
					alert("Provide correct Email ID!");
					$(this).focus();
				}					
			}
		}
	});
	
	// ON KEY UP EVENT
	$("#txt_uid").keyup(function(e){
		//alert(e.keyCode);
		if(e.keyCode==13){
			$("#home_btn_login").click();
		}
	});
	$("#txt_pwd").keyup(function(e){
		//alert(e.keyCode);
		if(e.keyCode==13){
			$("#home_btn_login").click();
		}
	});
	
	
	
	// REGISTER VALIDATION
	
	// ON BLUR CHECKING
	$("#register_name").blur(function(e){
			var regex=/([0-9!@#$%^&*{}|:;"'<,>.?~`\\\/\[\]-_])/;
			if(regex.test($(this).val())){
				alert("Only charecter value allowed");
				$(this).focus();
			}
	});
	
	$("#register_email").blur(function(){
		var registerEmailVal=$(this).val();
		if(registerEmailVal!==""){
			if(emailValid(registerEmailVal)==false)
			{
				alert("Provide correct Email ID!");
				$("#register_email").focus();
				return false;
			}	
			//$("#register_email").keyup();
		}
		//alert(registerEmailVal);
	});
	$("#register_pwd").blur(function(){
		if($(this).val()!==""){
			var pswd=$(this).val().length;
			if(pswd!==""){
				if(pswd<8){
					alert("Enter Strong Password atleast 8 digits");
					$(this).focus();
				}
			}
		}
	});
	
	$("#register_confirm_pwd").blur(function(){
		if($(this).val()!==""){
			if($(this).length < $("#register_pwd").length || $(this).length > $("#register_pwd").length){
				alert("Confirm password didn't match ! if");
				$(this).focus();
			}
			else{
				//alert("else");
				var pwd=$("#register_pwd").val();
				var confirm_pwd=$(this).val();
				//alert(pwd+" "+confirm_pwd);
				/*for(var digit=0; digit<$(this).length; digit++){
					if(confirm_pwd[digit]!==pwd[digit]){
						alert("Confirm password didn't match !");
						$(this).focus();
						break;
					}
				}*/
				if(confirm_pwd!==pwd){
					alert("Confirm password didn't match !");
					$(this).focus();
				}
			}
		}
	});
	
	$("#register_contact").blur(function(){
		var regex=/([A-Za-z!@#$%^&*{}|:;"'<,>.?~`\\\/\[\]-_])/;
		if(regex.test($(this).val())){
			alert("Only numeric value allowed..");
			$(this).focus();
		}
	});
	
	// BUTTON REGISTER CLICK
	$("#home_btn_register").click(function(){
		if($("#register_name").val()===""){
			alert("Enter user name");
			$("#register_name").focus();
		}	
		else if($("#register_email").val()===""){
			alert("Enter email id");	
			$("#register_email").focus();
		}
		else if($("#register_pwd").val()===""){
			alert("Enter password");	
			$("#register_pwd").focus();
		}
		else if($("#register_confirm_pwd").val()===""){
			alert("Enter confirm password");	
			$("#register_confirm_pwd").focus();
		}
		else{
			var name=$("#register_name").val();
			var email=$("#register_email").val();
			var pwd=$("#register_confirm_pwd").val();
			var contact=$("#register_contact").val();
			$.ajax({
				url:"register_action.php",
				data:{"name":name,"email":email,"pwd":pwd,"contact":contact},
				success: function(stat){
					if(stat==='success'){
						alert("Success");
						$("#btn_register").click();
						$("#btn_login").click();
					}
					else{
						alert(stat);
						$(this).click();
					}
				}
			});
		}
	});
	
	
	// ON KEY UP AND DOWN
	$("#register_email").keyup(function(e){
		var mail=$("#register_email").val();
		if(mail===""){
			$("#email_msg").hide("fast").text("");
		}
		else if(mail!==""){
			$.ajax({
				url:"ajax_check.php",
				data:{"chk":"email","val":mail},
				success: function(reply){
					//$("#register_contact").val(reply);
					//alert(reply);
					if(reply=="true"){
						//alert("This email is already exist");	
						$("#email_msg").text("This email is already exist").css("color","red").show("fast");
						$("#register_email").focus();
					}
					else{
						$("#email_msg").text("Available").css("color","green").show("fast");
					}
					//$("#register_contact").val(reply);
				}
			});
		}
	});
	$("#register_email").keydown(function(e){
		if(e.keyCode!=8){
			$(this).keyup();
		}
	});
	
	$("#register_contact").keyup(function(){
		var contact=$("#register_contact").val();
		if(contact===""){
			$("#contact_msg").hide("fast").text("");
		}
		else{
			$.ajax({
				url:"ajax_check.php",
				data:{"chk":"contact","val":contact},
				success: function(reply){
					//$("#register_contact").val(reply);
					//alert(reply);
					if(reply=="true"){
						//alert("This contact is already exist");	
						$("#contact_msg").text("This contact is already exist").css("color","red").show("fast");
						$("#register_contact").focus();
					}
					else{
						$("#contact_msg").text("Available").css("color","green").show("fast");
					}
				}
			});
		}
	});
	$("#register_contact").keydown(function(e){
		if(e.keyCode!=8){
			$(this).keyup();
		}
	});
	
	
	// LOGOUT
	$("#btn_logout").click(function(){
		$.ajax({
			url:"ajax_check.php",
			data:{"chk":"logout"},
			success: function(reply){
				if(reply){
					window.location.href='home.php';	
				}
			}	
		});	
	});
	
	
	//REGISTRATION PAGE SCRIPT
	
	
	
	// CREATE TYPE PAGE SCRIPT
	$("#txt_exam_type").blur(function(e){
			var regex=/([0-9!@#$%^&*{}|:;"'<,>.?~`\\\/\[\]-_])/;
			if(regex.test($(this).val())){
				alert("Only charecter value allowed");
				$(this).focus();
			}
	});
	$("#txt_exam_time").blur(function(){
		var regex=/([A-Za-z!@#$%^&*{}|:;"'<,>.?~`\\\/\[\]-_])/;
		if(regex.test($(this).val())){
			alert("Only numeric value allowed");
			$(this).focus();
		}
	});
	$("#create_type_submit").click(function(){
		if($("#txt_exam_type").val()=="" || $("#txt_exam_time").val()==""){
			if($("#txt_exam_type").val()==""){
				alert("Enter exam type");
				$("#txt_exam_type").focus();
			}
			else if($("#txt_exam_time").val()==""){
				alert("Enter Exam time");
				$("#txt_exam_time").focus();
			}
		}
		else{
			//alert("All data filled");	
			var type=$("#txt_exam_type").val();
			var time=$("#txt_exam_time").val();
			$.ajax({
				url:"ajax_check.php",
				data:{"chk":"insert_type","exm_type":type,"exm_time":time},
				success: function(reply){
					if(reply=="failed"){
						alert(reply);
					}
					else if(reply=="success"){
						//alert(reply);
						$.ajax({
							url:"ajax_check.php",
							data:{"chk":"type","lnk":"no"},
							success: function(drop_reply){
								$("#type_content").html(drop_reply);
							},
							complete:function(){
								//alert();	
								$("#txt_exam_time").val("");
								$("#txt_exam_type").val("").focus();
							}
						});
					}
				}
			});
		}
	});
	$("#txt_exam_type").blur(function(){
		var value=$(this).val();
		$.ajax({
			url:"ajax_check.php",
			data:{"chk":"check_type","val":value},
			success: function(reply){
				if(reply=="true"){
					alert("This type is already exist");	
					$("#txt_exam_type").val("").focus();
				}
			}
		});
	});
	
	
	// CREATE EXAM
	var divs=0;
	$("#add_new").click(function(){
		divs++;
		//alert($(this).val());
		$.ajax({
			url:"ajax_check.php",
			data:{"chk":"add_new","div":divs},
			success: function(reply){
				$("#question_container").append(reply);
			}
		});
	});
	
	

	// SUBHADEEP 19 Aug 2014
	
	// CREATE SUBJECT SCRIPT
	$("#exam_subject").blur(function(e){
		var regex=/([0-9!@$%^&*{}|:;"'<,>?~`\\\/\[\]-_])/;
		if(regex.test($(this).val())){
			alert("Only charecter value allowed");
			$(this).focus();
		}
	});
	$("#subject_submit").click(function(){
		if($("#exam_subject").val()==""){
			alert("Enter Subject");
			$("#exam_subject").focus();
		}
		else{
			var sbjct=$("#exam_subject").val();
			$.ajax({
				url:"ajax_check.php",
				data:{"chk":"insert_subject","subject":sbjct},
				success: function(reply){
					if(reply=="failed"){
						alert(reply);
						//$("#exam_subject").val("");
					}
					else if(reply=="success"){
						$.ajax({
							url:"ajax_check.php",
							data:{"chk":"subject","lnk":"no"},
							success: function(drop_reply){
								$("#subject_content").html(drop_reply);
								$("#exam_subject").val("").focus();
							}
						});
					}
				}
			});
		}
	});	
	$("#exam_subject").blur(function(){
		var sbjct=$(this).val();
		$.ajax({
			url:"ajax_check.php",
			data:{"chk":"check_subject","subj":sbjct},
			success: function(reply){
				if(reply=="true"){
					alert("Subject Exist");
					$("#exam_subject").val("").focus();
				}
			}
		});
	});
	
	// CHANGE PASSWORD SCRIPT
	$("#txt_new_pwd").blur(function(){
		if($(this).val().length<8){
			alert("Password length must be greate or equal to 8");
			$(this).focus();
		}
	});
	$("#btn_change").click(function(){
		if($("#txt_old_pwd").val()=="" || $("#txt_new_pwd").val()=="" || $("#txt_cnfrm_pwd").val()==""){
			if($("#txt_old_pwd").val()==""){
				alert("Enter old password");
				$("#txt_old_pwd").focus();
			}
			else if($("#txt_new_pwd").val()==""){
				alert("Enter new password");
				$("#txt_new_pwd").focus();
			}
			else if($("#txt_cnfrm_pwd").val()==""){
				alert("Enter confirm password");
				$("#txt_cnfrm_pwd").focus();
			}
		}
		else{
			//alert("all ok");
			if($("#txt_cnfrm_pwd").val().length !== $("#txt_new_pwd").val().length){
				alert("Confirm password is different from new password");
				$("#txt_cnfrm_pwd").focus();
			}
			else if($("#txt_cnfrm_pwd").val().length === $("#txt_new_pwd").val().length){
				//alert("Changing...");
				var old_pwd=$("#txt_old_pwd").val();
				var new_pwd=$("#txt_cnfrm_pwd").val();
				$.ajax({
					url:"ajax_check.php",
					data:{"chk":"change_pwd","old_pwd":old_pwd,"new_pwd":new_pwd},
					success: function(reply){
						if(reply=="success"){
							$("#profile").click();
							alert("Password Changed");
						}
						else if(reply=="failed"){
							alert("Failed");
						}
					}
				});
			}
		}
	});
		
});

// FETCH QUESTION AND ANSWERS
function fethQuestionAns(exm_id,qst_no){
	$.ajax({
		url:"ajax_check.php",
		data:{"chk":"qst_ans","exm":exm_id,"qst":qst_no},
		success: function(reply){
			$("#question_set").html(reply);
			//alert(reply);
		}
	});
}

// EMAIL VALIDATE CHECKING
function emailValid(mail){
	//alert("Within Functin");
	/*if(mail===Admin_ID){
		//alert("Admin");
		return true;	
	}
	else if(mail!==Admin_ID){*/
		if(mail.indexOf('@')===-1 || mail.indexOf('@')===0 || mail.charAt(mail.indexOf('@')+1)==='.' || mail.charAt(mail.indexOf('@')-1)==='.' || (((mail.split('@'))[1]).split('.')).length<=1 || ((mail.length-1) - mail.lastIndexOf('.'))<2 || ((mail.length-1) - mail.lastIndexOf('.'))>4){
		  return false;	
		}
		else{
		  return true;	
		}	
	//}
}


// VALID EXAM MANAGEMENT
function exam_detail_valid(){
	if($("#type_option").val()==="Select Type" || $("#subject_option").val()==="Select Subject"){
		if($("#type_option").val()==="Select Type"){
			alert("Select Type");	
			$("#type_option").focus();
			return false;
		}
		else if($("#subject_option").val()==="Select Subject"){
			alert("Select Subject");
			$("#subject_option").focus();
			return false;
		}
	}
}

// VALID SEARCH TYPE
function valid_search_type(){
	return false;
}
