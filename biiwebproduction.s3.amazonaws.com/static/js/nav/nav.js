$(document).ready(function() {
	///////////////////////////////////////////////////
	// SEARCH BOX /////////////////////////////////////
	$('.popup').css({ opacity: 0 });
	$('.form-container').submit(function() {
		if(!$('.form-container .search-field').val() || $('.form-container .search-field').val() == "Type search text here...") {
			$('.popup').css({ opacity: 0 });
			$('.popup').animate(
				{ opacity: 1 },
				{
					duration: 'slow',
					easing: 'easeOutBounce'
				});
			return false;
		}
	});
	$('.form-container .search-field').focus(function() {
		if($(this).val() == "Type search text here...") {
			this.value = "";
		}
	});
	$('.form-container .search-field').keydown(function() {
		$('.popup').css({ opacity: 0 });
	});
	///////////////////////////////////////////////////
	// MENU DROP DOWN /////////////////////////////////
	// Cache the elements we'll need
	var menu = $('#cssmenu');
	var menuList = menu.find('ul:first');
	var listItems = menu.find('li').not('#responsive-tab');

	// Create responsive trigger
	menuList.prepend('<li id="responsive-tab"><a href="#">Menu</a></li>');

	// Toggle menu visibility
	menu.on('click', '#responsive-tab', function(){
		listItems.slideToggle('fast');
		listItems.addClass('collapsed');
	});
	///////////////////////////////////////////////////
	// TABS SECTION ///////////////////////////////////
	$(".tabs .tab").click(function() {
		var id = this.id;
		$(".tabs .tab").removeClass("on");
		$(this).addClass("on");
		$(".tabs .tab-content").removeClass("on");
		$("#"+id+"-content").addClass("on");
	});
	///////////////////////////////////////////////////
	// EXPLANATIONS ///////////////////////////////////
	$(".tabs .box").mouseenter(function() {
		$this = $(this);
		$current_tab = $this.closest(".tab-content");
		$current_tab.find(".box").removeClass("selected");
		$current_tab.find(".explanation").removeClass("on");
		$this.addClass("selected");
		$(this).find(".explanation").addClass("on");
	});
	$(".tabs .explanation").mouseenter(function(e) {
		e.stopPropagation();
	});
});