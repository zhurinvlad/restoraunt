function scaleVideoContainer(){var i=$(window).height(),e=parseInt(i)+"px";$(".homepage-hero-module").css("height",e)}function initBannerVideoSize(i){$(i).each(function(){$(this).data("height",$(this).height()),$(this).data("width",$(this).width())}),scaleBannerVideoSize(i)}function scaleBannerVideoSize(i){var e,n,o=$(window).width(),t=$(window).height();console.log(t),$(i).each(function(){var i=$(this).data("height")/$(this).data("width"),a=t/o;i>a?(e=o,n=e*i,$(this).css({top:-(n-t)/2+"px","margin-left":0})):(n=t,e=n/i,$(this).css({"margin-top":0,"margin-left":-(e-o)/2+"px"})),$(this).width(e).height(n),$(".homepage-hero-module .video-container video").addClass("fadeIn animated")})}$(document).ready(function(){scaleVideoContainer(),initBannerVideoSize(".video-container .poster img"),initBannerVideoSize(".video-container .filter"),initBannerVideoSize(".video-container video"),$(window).on("resize",function(){scaleVideoContainer(),scaleBannerVideoSize(".video-container .poster img"),scaleBannerVideoSize(".video-container .filter"),scaleBannerVideoSize(".video-container video")})});