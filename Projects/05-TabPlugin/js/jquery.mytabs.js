(function($) {

	$.fn.myTabs = function() {
		return $(this).each(init);
	};

	function init() {
		var $tabs = $(this);

		$tabs.on("click", ".tab-nav .tab", onClick)
			 .addClass("mytabs");
	}

	function onClick(e) {
		var $target  = $(e.target),
			$parent  = $target.parents(".mytabs"),
			$sibs    = $target.siblings(),
			$content = $parent.find(".tab-content .tab"),
			id       = $target.attr("href");

		$sibs.removeClass("active");
		$content.removeClass("active");

		$target.addClass("active");
		$content.filter(id).addClass("active");
	}

})(jQuery);
