$(function(){
    var a="Product Selector";
    if(current_lang=="de"){
	a="Produktselektor"
	}
	if(typeof toggle=="undefined"||toggle){
	$("h1").after('<div id="productselector_toggler"><span>'+a+'</span></div><div id="productselector"></div>');
	$("#productselector_toggler").one("click",c).click(function(){
	    $("#productselector").add($(this)).toggleClass("open")
	    }).hover(function(){
	    $(this).addClass("hover")
	    },function(){
	    $(this).removeClass("hover")
	    })
	}else{
	$("h1").after('<div id="productselector"></div>');
	$("#productselector").toggleClass("open");
	c()
	}
	$("#productselector form.panel select").live("change",b);
    $("#productselector form.panel a").live("click",function(){
	c();
	return false
	});
    function c(){
	$("#productselector").addClass("loading");
	var d=(typeof productselectorPreallocateItemId!="undefined")?"productselectorPreallocateItemId="+productselectorPreallocateItemId:"preallocateString="+escape(productselectorPreallocateString);
	$.get("/ajax/productselector.action?"+d,function(e){
	    window.setTimeout(function(){
		$("#productselector").removeClass("loading").html(e)
		},1000)
	    })
	}
	function b(){
	var d=$("#productselector");
	d.css("height",d.height()).empty().addClass("loading");
	var e=$(this).parents("form").serialize();
	$.get("/ajax/productselector.action?"+e,function(f){
	    window.setTimeout(function(){
		d.css("height","").removeClass("loading").html(f)
		},1000)
	    })
	}
    });
    
 //
 //