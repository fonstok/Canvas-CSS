$("section").data("num", 0);
$(".posMessage").hide();
$(".varMessage").hide();

var oldvar = null;
function updateNumberText(_parent, _var) {
	$(".varMessage", _parent)
		.fadeOut(0.5, function() {
			$(".numbervar", _parent).html(_var);
			oldvar = _var - 5;
			if (oldvar < 0) {
				oldvar = 0;
				$(".wasis", _parent).html("is");
			} else {
				$(".wasis", _parent).html("was");
			}
			$(".numbervarold", _parent).html(oldvar);
		})
		.fadeIn();
}

$(".varset").click(function() {
	var $mySection = $(this).parents("section");

	$mySection.data("num", $mySection.data("num") + 5);
	console.log($mySection.attr("id"));
	if ($mySection.attr("id") == "if" && $mySection.data("num") > 30) {
		$mySection.data("num", 0);
		$(".blink", $mySection)
			.fadeOut()
			.fadeIn();
	}
	updateNumberText($mySection, $mySection.data("num"));
	$(".posMessage", $mySection).hide();
});
// reset sequence
$(".reset").click(function() {
	var $mySection = $(this).parents("section");
	$(".posMessage", $mySection).fadeIn();
	$(".posvar", $mySection).html(0);
});
// good sequence
$(".good").click(function() {
	var $mySection = $(this).parents("section");
	$(".varMessage", $mySection).fadeIn();
	$(".posvar", $mySection).html(0);
	$(this)
		.parents("section")
		.data("num", 0);
	updateNumberText(
		$mySection,
		$(this)
			.parents("section")
			.data("num")
	);

	$('.blink', $mySection).fadeOut().fadeIn();
	//$('.varMessage', $mySection).hide();
});
