$(function(){var a=document.location.href;var b="http://"+window.location.hostname;$('a[href*="download!download"]').live("click",function(){_gaq.push(["_trackEvent","Downloads",a,$(this).attr("href")])});$("#content_tools .bookmarks a").click(function(){_gaq.push(["_trackEvent","Social Networks",a,$(this).attr("href")])});$("#home-visual #home-visual-nav a").click(function(){_gaq.push(["_trackEvent","Home-Visual",a,"Visual "+$(this).text()])});$('a[href^="http"]:not([href^="'+b+'"])').click(function(c){_gaq.push(["_trackEvent","Outbound",a,$(this).attr("href")])});$("#content_tools .recommend a.toggle, #content_tools .recommend a.cancel").click(function(){_gaq.push(["_trackEvent","Page-Recommend",a,$(this).text()])});$(".box.contact a").click(function(){_gaq.push(["_trackEvent","Contact-Box",a,$(this).text()])});$(".page-technology a[rel='lightbox']").click(function(){_gaq.push(["_trackEvent","Lightbox",a,$(this).attr("href")])});$("#content_tools .rating .ui-stars-star").click(function(){_gaq.push(["_trackEvent","Page-Rating",a,$(this).prev("span.ui-stars-star-caption").text()])});$("#content_tools .rating a.cancel").click(function(){_gaq.push(["_trackEvent","Page-Rating",a,$(this).text()])})});