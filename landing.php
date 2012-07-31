<html>
    <head>
	<title>Scitek Scrapper</title>
	<script type="text/javascript" src="js/jquery.js"></script>
	<script>
	    $(document).ready(function() {
		$("#productselector").addClass("loading");
		$.ajax({
		    url: "scrapper.php?token=",
		    context: document.body,
		    success: function(html){
			$("#productselector").removeClass("loading").html(html);
		    }
		});
		$("#productselector form.panel select").live("change",a);
	    });
	    
	    function a() {
		var data=$(this).parents("form").serialize();
		$.ajax({
		    url: "scrapper.php?token="+data,
		    context: document.body,
		    beforeSend: function() {
			$("#productselector").addClass("loading");
		    },
		    success: function(html){
			$("#productselector").removeClass("loading").html(html);
		    }
		});
	    }
	</script>
	<style>
	    .loading {
		background:#FAFAFA url('spinner.gif') 50% 40% no-repeat;
	    }
	    .loading * {
		visibility:hidden;
	    }
	    legend {
		display:none;
	    }
        </style>
    </head>
    <body>
	<div id="productselector">
	</div>
    </body>
</html>