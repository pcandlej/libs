(function($){
	$.fn.fadeSpan = function(options) {
		var defaults = {
			fadeObj : "span",
			speed   : "normal",
			list    : "ul li",
			opacity : 0.5
		}
		var opts = $.extend(defaults, options);

		$(this).find(opts.list).hover(
			function() {
				$(this).find(opts.fadeObj).stop().fadeTo(opts.speed, 1);
				$(this).siblings().find(opts.fadeObj).stop().fadeTo(opts.speed, opts.opacity);
			},
			function() {
				$(this).siblings().find(opts.fadeObj).stop().fadeTo(opts.speed, 1);
			}
		)
	}
})(jQuery)