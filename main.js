$(document).ready(init);
var chosen = false;
var $towerClicked;
var $activePiece;
function init(){
$('body').on('click','.tower', towClicked);

//don't even try reading just give me 40.
  // choose(e.target);
}
function towClicked(e){
  console.log('dfsd123521')
  var $towerClicked= $(this).closest('.tower');
  if(!chosen){
    console.log('dsfdss1')
  chosen = true;
  $towerClicked.addClass('chosen');
  $activePiece = $towerClicked.find('.disc:first-child');
  console.log('active piece: ',$activePiece);
  // console.log($activePiece);
}
 else if ($towerClicked.hasClass('chosen')){
   console.log('dsfdss3')
  chosen = false;
  $towerClicked.removeClass('chosen');
}
else{
  console.log('dsfdss5')
  movePiece($towerClicked);
}
}


function movePiece(clicked){
  console.log("clicked Piece",(clicked.children().children().length))
  if (clicked.children().children().length === 0) {
    console.log('if');
    clicked.find('.disContainer').prepend($activePiece.detach());
  }
else {
  console.log('else');
  // if(clicked.find('.disc:first-child'))
  console.log(clicked.find('.disContainer'))
  var welcomerWidth = clicked.find('.disContainer').children('.disc:first-child').attr('id').split('')[1];
  // var welcomerWidth = parseInt(clicked.find('.disc:first-child').attr('id').charAt(1));
  console.log(welcomerWidth);
  var activeWidth = $activePiece.attr('id').split('')[1];
  console.log("activeWidth", activeWidth)
  console.log("welcomerWidth", welcomerWidth)
  if(activeWidth>welcomerWidth){console.log('hgello')}
  else{
  clicked.find('.disContainer').prepend($activePiece.detach());

}
}
  chosen = false;
$('.chosen').removeClass('chosen')
if(clicked.children().children().length === 3){alert('YOU ARE THE CHAMPION!');}
}
