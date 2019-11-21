console.log($);
$('nav a').on("click", clickMe);
function clickMe(event) {
  event.preventDefault();
  var me = event.currentTarget;
  var $me = $(me);
  var myLink = $me.attr('href');
  console.log(myLink);
 
  $('#load-zone').fadeOut(1.2,function(){
    $('#load-zone').load(myLink, loadDone);
  })

  $('nav a').removeClass('hit');
  $me.addClass("hit")
}
function loadDone(){
  console.log("test");
  $('#load-zone').fadeIn();
}
