
var p_width = 0;

$( "#button1" ).click(function() {
  p_width += 1;
  $(".progress-bar").width(`${p_width}%`);
});

$( "#button3" ).click(function() {
  p_width += 3;
  $(".progress-bar").width(`${p_width}%`);
});

$( "#button7" ).click(function() {
  p_width += 7;
  $(".progress-bar").width(`${p_width}%`);
  console.log(p_width)
});
