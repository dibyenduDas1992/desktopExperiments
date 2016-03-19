function generateColorCode(lngth){
	//alert("inside script");
	var chars=new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
	//alert("Afte array declaraion");
	var colorCode="";
	//alert(colorCode);
	for(var count=0;count<lngth;count++){
		colorCode+=chars[parseInt(((Math.random()*10)+2))];
//		((Math.random()*10)+1)
		//alert(chars[count]);
		//alert(parseInt(((Math.random()*10)+1)));
//		alert(colorCode);
	}
	//alert(colorCode);
	return colorCode;
}

	var blood="FF";
	var nature="00";
	var sky="00";
	var cursor="R";
	
function smothColor(id, bck, fnt){
//		alert(bck);
		bck=typeof bck==="undefined"?true:bck;
		fnt=typeof fnt==="undefined"?false:fnt;
//		alert(bck);
		if(bck===true || fnt===true){
			if(cursor=="R"){
				if(nature[1]==="F" && nature[0]!=="F"){
					nature=incrementValueBasedOnHTMLCode(nature[0]).toString()+incrementValueBasedOnHTMLCode(nature[1]).toString();			
				}
				else if(nature[0]==="F" && nature[1]!=="F"){
					nature=nature[0].toString()+incrementValueBasedOnHTMLCode(nature[1]).toString();
				}
				else{
					nature=nature[0]+incrementValueBasedOnHTMLCode(nature[1]).toString();
				}
				if(nature==="FF"){cursor="R/G";}
			}
			else if(cursor==="R/G"){
				if(blood[1]==="0" && blood[0]!=="0"){
					blood=decrementValueBasedOnHTMLCode(blood[0]).toString()+decrementValueBasedOnHTMLCode(blood[1]).toString();			
				}
				else if(blood[0]==="0" && blood[1]!=="0"){
					blood=blood[0].toString()+decrementValueBasedOnHTMLCode(blood[1]).toString();
				}
				else{
					blood=blood[0]+decrementValueBasedOnHTMLCode(blood[1]).toString();
				}
				if(blood==="00"){cursor="G";}
			}
			else if(cursor==="G"){
				if(sky[1]==="F" && sky[0]!=="F"){
					sky=incrementValueBasedOnHTMLCode(sky[0]).toString()+incrementValueBasedOnHTMLCode(sky[1]).toString();				
				}
				else if(sky[0]==="F" && sky[1]!=="F"){
					sky=sky[0].toString()+incrementValueBasedOnHTMLCode(sky[1]).toString();
				}
				else{
					sky=sky[0]+incrementValueBasedOnHTMLCode(sky[1]).toString();
				}
				if(sky==="FF"){cursor="G/B";}	
			}
			else if(cursor==="G/B"){
				if(nature[1]==="0" && nature[0]!=="0"){
					nature=decrementValueBasedOnHTMLCode(nature[0]).toString()+decrementValueBasedOnHTMLCode(nature[1]).toString();			
				}
				else if(nature[0]==="0" && nature[1]!=="0"){
					nature=nature[0].toString()+decrementValueBasedOnHTMLCode(nature[1]).toString();
				}
				else{
					nature=nature[0]+decrementValueBasedOnHTMLCode(nature[1]).toString();
				}
				if(nature==="00"){cursor="B";}
			}
			else if(cursor==="B"){
				if(blood[1]==="F" && blood[0]!=="F"){
					blood=incrementValueBasedOnHTMLCode(blood[0]).toString()+incrementValueBasedOnHTMLCode(blood[1]).toString();				
				}
				else if(blood[0]==="F" && blood[1]!=="F"){
					blood=blood[0].toString()+incrementValueBasedOnHTMLCode(blood[1]).toString();
				}
				else{
					blood=blood[0]+incrementValueBasedOnHTMLCode(blood[1]).toString();
				}
				if(blood==="FF"){cursor="B/R";}
			}
			else if(cursor==="B/R"){
				if(sky[1]==="0" && sky[0]!=="0"){
					sky=decrementValueBasedOnHTMLCode(sky[0]).toString()+decrementValueBasedOnHTMLCode(sky[1]).toString();			
				}
				else if(sky[0]==="0" && sky[1]!=="0"){
					sky=sky[0].toString()+decrementValueBasedOnHTMLCode(sky[1]).toString();
				}
				else{
					sky=sky[0]+decrementValueBasedOnHTMLCode(sky[1]).toString();
				}
				if(sky==="00"){cursor="R";}	
			}
		}
		
	
	// we are following the order RGB
//	alert(bck);
	if(bck===true){document.getElementById(id).style.backgroundColor="#"+blood+nature+sky;}
		
	if(fnt===true){document.getElementById(id).style.color="#"+blood+nature+sky;}
		
	setTimeout(function(){smothColor(id,bck,fnt);},30);
}

function incrementValueBasedOnHTMLCode(colorCode){
	//alert("input:"+colorCode);
	var baseCodes=new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
	var index=baseCodes.indexOf(colorCode);
	if(index!=-1){
		if(index==(baseCodes.length-1)){return baseCodes[0];}
		else{return baseCodes[index+1];}	
	}
}

function decrementValueBasedOnHTMLCode(colorCode){
	var baseCodes=new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
	var index=baseCodes.indexOf(colorCode);
	if(index!=-1){
		if(index==0){return baseCodes[baseCodes.length-1];}
		else{return baseCodes[index-1];}	
	}
}



