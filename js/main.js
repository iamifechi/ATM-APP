$(document).ready(function() {
    $(".col-6:odd").addClass("r");
	$(".col-6:even").addClass("l");
	$("#home").css("z-index", "1");
  });
  

function swipe(sect,link) {
	sect.style.zIndex = "0";
	link.style.zIndex = "1";
	
	sect.classList.remove("fadeIn");
	if(sect == welcome){
		welcome.style.zIndex=-10;
		link.getElementsByTagName("header")[0].classList.add("fadeIn");
		if(link == form){
			form2.classList.add("fadeIn");
		}
		
	}
	
};

function submit(x,y){
	x.style.zIndex = "0";
	var home = getElementById("#home");
	home.style.zIndex = "5";
	
}


  